let doc = document;
let isUndefined = (obj) => {
	return obj === void 0;
}
 

let getEles = (selector, context) => {
	return (context || doc).querySelectorAll(selector);
}

class Vquery {
	constructor(selector, context) {
		this.elements = getEles(selector, context);
	}

	get(index) {
		return this.elements[index < 0 ? 0 : index];
	}

	// h必须带px单位，但是返回值不带单位
	height (h) {
		if (isUndefined(h)) {
			return this.get(0).offsetHeight;
		}
		this.optimizedCb((ele) =>{
			ele.style.height = h;
		})
	}
	optimizedCb (callback) {

		this.elements.forEach(callback);
	}
	css (styles) {
		if (typeof styles === 'object') {
			this.optimizedCb((ele) =>{
				for (let key in styles) {
					ele.style[key] = styles[key];
				}
			})
		}
	}
	addClass (iClass) {
		this.optimizedCb((ele)=> {
			if (ele.className.split(' ').indexOf(iClass) === -1) {
				ele.className += ' ' + iClass;
			}
		})
	}

	html (sHtml) {
		if (isUndefined(sHtml)) {
			return this.get(0).innerHTML
		}
		this.optimizedCb((ele)=> {
			ele.innerHTML = sHtml
		})

		return this;
	}

	scrollTop (top) {
		if (isUndefined(top)) {
			return this.get(0).scrollTop;
		}
		this.optimizedCb((ele)=>{
			ele.scrollTop = top;
		})
	}
}



export default (selector, context)=> {
	return new Vquery(selector, context);
};