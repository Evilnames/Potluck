var name = Symbol('name');
export class ModelBase{
	constructor( 
		n='None'
		){
		console.log( 'ModelBase constructor', this );
		this[name] = n;
	}

	// setter and getter methods
	set name(n){
		if( typeof n === 'string' && n.length > 0 ){
			this[name] = n;
		}
		else{
			console.error( `"${n}" is not a valid name` );
		}
	}
	get name(){
		return this[name];
	}
}