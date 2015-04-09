var user = Symbol('user'),
	date = Symbol('date'),
	food = Symbol('food');
export class PotluckEvent extends ModelBase{
	constructor(
		n='None',
		d='None',
		u={id:0,name:'None'},
		f=[]
		){
		super(n);
		console.log( 'PotluckEvent constructor', this );
		// initial setting...
		this[user] = u;
		this[date] = d;
		this[food] = f;
	}

	// setter and getter methods
	set user(u){
		// this[user] = u;
		console.error('setting user is not allowed');
	}
	get user(){
		return this[user].getInfo();
	}

	set date(d){
		// TODO - get a date check condition
		if( true ){
			this[date] = d;
		}
		else{
			console.error(`"${d}" is not a valid date`);
		}
	}
	get date(){
		return this[date].toString();
	}

	set food(f){
		//this[food] = f;
		console.warn('setting food is not allowed');
		console.info('Use PotluckEvent.addFood( f, user ) & PotluckEvent.removeFood( f, user )');
	}
	get food(){
		return this[food].slice(0);
	}

	// methods
	addFood( f, user ){
		console.log( 'add food', f );
		var arr = this[food];

		arr[ arr.length ] = f;
		return this;
	}

	removeFood( f, user ){
		console.log( 'remove food', f );
		var num = this[food].indexOf(f);
		if( num !== -1 ){
			this[food].splice( num, 1 );
		}
		else{
			console.warn( `"${typeof f === 'string' ? f : f.name}" is not in the food list of Pot Luck Event "${this.name}"`, this );
		}
		return this;
	}

	getUserId(){
		console.log('return user id');
		return this[user].id.toString();
	}
}