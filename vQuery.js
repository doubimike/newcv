let doc = document;

let getEles = (selector,context)=>{
	return Array.from(((context && context)||doc)).querySelecorAll(selector);
};

class Vquery {
	constructor(selector,context){
		this.elements = getEles(selector,context);
	}
}

export default (selector,context)=>{
	return new Vquery(selector,context)
}


