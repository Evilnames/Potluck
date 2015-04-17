var n = Symbol('name'),
	u = Symbol('userId');
export class ModelBase{
	constructor( 
		name='None',
		userId=0
		){
		console.log( 'ModelBase constructor', this );
		this[n] = name;
		this[u] = userId;
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
	set userId(userId){
		if( userId && userId > 0 ){
			this[u] = userId;
		}
		else{
			console.error(`"${userId}" is not a valid User ID`);
		}
	}
	get userId(){
		return this[u].toString();
	}
}