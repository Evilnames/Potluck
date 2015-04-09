var n = Symbol('name');
export class ModelBase{
	constructor( 
		name='None'
		){
		console.log( 'ModelBase constructor', this );
		this[n] = name;
	}

	// setter and getter methods
	set name(name){
		if( typeof name === 'string' && name.length > 0 ){
			this[n] = name;
		}
		else{
			console.error( `"${name}" is not a valid name` );
		}
	}
	get name(){
		return this[n];
	}
}