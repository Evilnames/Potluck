var user = Symbol('user');
export class FoodItem extends ModelBase{
	constructor( 
		n='None', 
		u={id:0,name:''}
		){
		super(n);
		console.log( 'FoodItem constructor', this );
		this[user] = u;
	}
}