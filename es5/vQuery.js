var doc = document;
var isUndefined = function (obj) {
	return obj === void 0;
}

var  getEles = function (selector,context) {
	return (context|| doc).querySelectorAll(selector);
}



function Vquery(selector,context) {
	this.elements = getEles(selector,context);
}
Vquery.prototype.get = function (index) {
	return this.elements[index<0?0:index];
}
Vquery.prototype.height = function (h) {
	if(isUndefined(h)){
		return this.get(0).offsetHeight;
	}
	this.optimizedCb(function (ele) {
		ele.style.height = h;
	})
}
Vquery.prototype.optimizedCb = function (callback) {

	this.elements.forEach(callback);
}
Vquery.prototype.css = function (styles) {
	if(typeof styles ==='object'){
		this.optimizedCb(function (ele) {
			for(var key in styles){
				ele.style[key]=styles[key];
			}
		})
	}
}
Vquery.prototype.addClass = function (iClass) {
	this.optimizedCb(function (ele) {
			if(ele.className.split(' ').indexOf(iClass)===-1){
				ele.className += iClass;
			}
		})
}

Vquery.prototype.html = function (sHtml) {
	if (isUndefined(sHtml)) {
      return this.get(0).innerHTML
    }
    console.log('this',this.optimizeCb)
    console.log('this',this.__proto__)
    this.optimizedCb(function(ele){
      ele.innerHTML = sHtml
    })

    return this;
}

Vquery.prototype.scrollTop = function (top) {
	if(isUndefined(top)){
		return this.get(0).scrollTop;
	}
	this.optimizedCb(function (ele) {
		ele.srollTop = top;
	})	
}

var $ = function (selector,context) {
	return new Vquery(selector,context);
};

