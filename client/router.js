Router.route('/', function() {
    this.render('HomePage');
});

Router.route('/add', function() {
    this.render('addPotluck')
});

Router.route('/view/:id', function() {
    this.render('viewSinglePotLuck', {
        data: function() {
            return {
                id: this.params.id
            }
        }
    });
});