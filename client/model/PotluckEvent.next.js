var u = Symbol('user'),
	d = Symbol('date'),
	f = Symbol('food');
export class PotluckEvent extends ModelBase{
	constructor(
		name='None',
		date='None',
		user={id:0,name:'None'},
		food=[]
		){
		super(name);
		console.log( 'PotluckEvent constructor', this );
		// initial setting...
		this[u] = user;
		this[d] = date;
		this[f] = food;
	}

	// setter and getter methods
	set user(user){
		// this[u] = user;
		console.error('setting user is not allowed');
	}
	get user(){
		return this[u].getInfo();
	}

	set date(date){
		// TODO - get a date check condition
		if( true ){
			this[d] = date;
		}
		else{
			console.error(`"${date}" is not a valid Date`);
		}
	}
	get date(){
		return this[d].toString();
	}

	set food(food){
		//this[f] = food;
		console.warn('setting food is not allowed');
		console.info('Use PotluckEvent.addFood( food, user ) & PotluckEvent.removeFood( food, user )');
	}
	get food(){
		return this[f].slice(0);
	}

	// methods
	addFood( food, user ){
		console.log( 'add food', food );
		var arr = this[f];

		arr[ arr.length ] = food;
		return this;
	}

	removeFood( food, user ){
		console.log( 'remove food', food );
		var num = this[f].indexOf(food);
		if( num !== -1 ){
			this[f].splice( num, 1 );
		}
		else{
			console.warn( `"${typeof food === 'string' ? food : food.name}" is not in the food list of Pot Luck Event "${this.name}"`, this );
		}
		return this;
	}

	getUserId(){
		console.log('return user id');
		return this[u].id.toString();
	}
}