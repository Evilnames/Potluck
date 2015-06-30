Session.setDefault('counter', 0);

// Template.hello.helpers({
//     counter: function() {
//         return Session.get('counter');
//     }
// });

// Template.hello.events({
//     'click button': function() {
//         // increment the counter when button is clicked
//         Session.set('counter', Session.get('counter') + 1);
//     }
// });

//Home Page Pieces
Template.HomePage.events({
    'click #NewPotLuckBtn': function() {
        Router.go('/add');
    }
});


//Potlucklist helpers
Template.potlucklist.helpers({
    PotLuck: function() {
        return Potlucks.find();
    }
});

Template.potlucklist.events({
    'click div.potluck-list-item': function(e) {
        //Go to this ID
        Router.go('/view/' + this._id);
    }
})


//Add a new Potluck section
Template.addPotluck.events({
    'submit #newpotluck': function(e) {
        //Get and validate the options from the page
        var name = e.target.name.value;
        var eventDate = e.target.when.value;

        if (name == '') {
            alert('Error : No Name');
            return false;
        }

        //Extend potluck base model so that we don't erase it
        var newPotluck = $.extend({}, potLuckModel);

        //Update the newpotluck model.
        newPotluck.name = name;
        newPotluck.eventDate = eventDate;

        //Add it to the database.
        Potlucks.insert(newPotluck);

        //Go to the front page again!
        Router.go('/');
        return false;
    }
});


//View details about a single potluck
Template.viewSinglePotLuck.helpers({
    details: function() {
        return Potlucks.findOne({
            _id: this.id
        });
    }
});

Template.viewSinglePotLuck.events({
    //Event that happens when someone says im bringing food!
    'submit #bringfood': function(e) {
        var food = e.target.food.value;

        var arr = {
            food: food
        };

        Potlucks.update({
            _id: this.id
        }, {
            $push: {
                food: arr
            }
        })

        //Empty Food ARea so you can bring... more food!
        e.target.food.value = '';
        return false;
    }
});

Template.listoffood.helpers({
    FoodItem: function() {
        return Potlucks.findOne({
            _id: this.id
        });
    }
});
