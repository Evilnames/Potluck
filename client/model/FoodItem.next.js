var u = Symbol('user');
export class FoodItem extends ModelBase{
	constructor( 
		name='None', 
		user={id:0,name:''}
		){
		super(name);
		console.log( 'FoodItem constructor', this );
		this[u] = user;
	}

	// setter and getter methods
	set user(user){
		// this[u] = user;
		console.error('setting user is not allowed');
	}
	get user(){
		return this[u].getInfo();
	}
}