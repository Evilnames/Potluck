var name = Symbol('name'),
	user = Symbol('user'),
	date = Symbol('date'),
	food = Symbol('food');
export class PotluckEvent{
	constructor(
		n='None',
		d='None',
		u={id:0,name:'None'},
		f=[]
		){
		console.log( 'PotluckEvent constructor', this );
		// initial setting...
		this[name] = n;
		this[user] = u;
		this[date] = d;
		this[food] = f;
	}

	getUserId(){
		console.log('return user id');
		return this[user].id;
	}

	// setter and getter methods
	set name(n){
		if( typeof n === 'string' && n.length > 0 ){
			this[name] = n;
		}
		else{
			console.log( `"${n}" is not valid Pot Luck Event Name` );
		}
	}
	get name(){
		return this[name];
	}

	set user(u){
		// this[user] = u;
		console.log('setting user is not allowed');
	}
	get user(){
		return this[user];
	}

	set date(d){
		// TODO - get a date check condition
		if( true ){
			this[date] = d;
		}
		else{
			console.log(`"${d}" is not a valid date`);
		}
	}
	get date(){
		return this[date];
	}

	set food(f){
		//this[food] = f;
		console.log('setting food is not allowed');
		console.log('Use PotluckEvent.addFood( f, user ) & PotluckEvent.removeFood( f, user )');
	}
	get food(){
		return this[food];
	}

	addFood( f, user ){
		this[food][ this[food].length ] = f;
		return this;
	}

	removeFood( f, user ){
		var num = this[food].indexOf(f);
		if( num !== -1 ){
			this[food].splice( num, 1 );
		}
		else{
			console.log( `"${typeof f === 'string' ? f : f.name}" is not in the food list of Pot Luck Event "${this.name}"`, this );
		}
		return this;
	}
}