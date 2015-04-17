export class FoodItem extends ModelBase{
	constructor( 
		name='None', 
		userId=0,
		type=[]
		){
		super(name,userId);
		console.log( 'FoodItem constructor', this );
	}

	// setter and getter methods
}