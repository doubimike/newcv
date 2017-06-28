/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stylesEditor__ = __webpack_require__(1);
// console.log(getEles('#content'))
// showStyles(0,function () {
// 	markdownToHtml()
// })
// showStyles(0,function () {
// 	showResume(function () {
// 		showStyles(1,function () {
// 			markdownToHtml(function () {
// 				showStyles(2)
// 			})
// 		})
// 	})
// })




let { showStyles } = __WEBPACK_IMPORTED_MODULE_0__stylesEditor__["a" /* default */];

// showResume()
// showStyles(0, () => {
//   showResume(() => {
//     showStyles(1, () => {
//       markdownToHtml(() => {
//         showStyles(2)
//       })
//     })
//   })
// })
showStyles(0);
// showStyles(2)
// 回调太恶心，后面应该换成其他的形式完成

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vQuery__ = __webpack_require__(3);



let $stylesWrap = __WEBPACK_IMPORTED_MODULE_1__vQuery__["a" /* default */]('#app .styles-wrap');

let stylesWrap = $stylesWrap.get(0);
let $style = __WEBPACK_IMPORTED_MODULE_1__vQuery__["a" /* default */]('style', stylesWrap);
let $stylePre = __WEBPACK_IMPORTED_MODULE_1__vQuery__["a" /* default */]('pre', stylesWrap);

let currentStyle = '';
let delay = 60;
let timer = null;
let MAX_HEIGHT = $stylesWrap.height();

const goBottom = top => {
  $stylesWrap.scrollTop(top);
};

const showStyles = (num, callback) => {
  let style = __WEBPACK_IMPORTED_MODULE_0__data_styles__["a" /* default */][num];
  let length;
  let prevLength;
  if (!style) {
    return;
  }

  // 0是reduce初始值
  length = __WEBPACK_IMPORTED_MODULE_0__data_styles__["a" /* default */].filter((item, i) => {
    return i <= num;
  }).reduce((result, item) => {

    result += item.length;
    return result;
  }, 0);

  prevLength = length - style.length;
  clearInterval(timer);

  timer = setInterval(() => {
    let start = currentStyle.length - prevLength;
    let char = style.substring(start, start + 1) || '';
    currentStyle += char;
    if (currentStyle.length === length) {
      clearInterval(timer);
      callback && callback();
    } else {
      let top = $stylePre.height() - MAX_HEIGHT;

      if (top > 0) {

        goBottom(top);
      }
      $style.html(currentStyle);
      $stylePre.html(Prism.highlight(currentStyle, Prism.languages.css));
    }
    // clearTimeout(timer);
  }, delay);
};

/* harmony default export */ __webpack_exports__["a"] = ({
  showStyles
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var styles = [`
/*
* Inspired by http://strml.net/
* 大家好，我是张航
* 看到首页链接的效果，自己也想实现一个
* 说做就做，我也来写一份简历！
*/

/* 首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); background: rgb(0,43,54); 
}
/* 文字离边框太近了 */
.styles-wrap {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styles-wrap {
  position: fixed; left: 1rem; top: 0; 
  -webkit-transition: .5; 
  transition: .5;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resume-wrap{
  position: fixed; right: .5rem; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh; 
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
  
}
/* 好了，我开始写简历了 */
`, `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`, `
/* 再对 HTML 加点样式 */
.resume-wrap{
  padding: 2em;
}
.resume-wrap h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resume-wrap ul,.resume-wrap ol{
  list-style: none;
}
.resume-wrap ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resume-wrap ol {
  counter-reset: section;
}
.resume-wrap ol li::before {
  counter-increment: section;            
  content: counters(section, ".") " ";  
  margin-right: .5em;
}
.resume-wrap blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`];

/* harmony default export */ __webpack_exports__["a"] = (styles);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let doc = document;
let isUndefined = obj => {
	return obj === void 0;
};

let getEles = (selector, context) => {
	return (context || doc).querySelectorAll(selector);
};

class Vquery {
	constructor(selector, context) {
		this.elements = getEles(selector, context);
	}

	get(index) {
		return this.elements[index < 0 ? 0 : index];
	}

	// h必须带px单位，但是返回值不带单位
	height(h) {
		if (isUndefined(h)) {
			return this.get(0).offsetHeight;
		}
		this.optimizedCb(ele => {
			ele.style.height = h;
		});
	}
	optimizedCb(callback) {

		this.elements.forEach(callback);
	}
	css(styles) {
		if (typeof styles === 'object') {
			this.optimizedCb(ele => {
				for (let key in styles) {
					ele.style[key] = styles[key];
				}
			});
		}
	}
	addClass(iClass) {
		this.optimizedCb(ele => {
			if (ele.className.split(' ').indexOf(iClass) === -1) {
				ele.className += ' ' + iClass;
			}
		});
	}

	html(sHtml) {
		if (isUndefined(sHtml)) {
			return this.get(0).innerHTML;
		}
		this.optimizedCb(ele => {
			ele.innerHTML = sHtml;
		});

		return this;
	}

	scrollTop(top) {
		if (isUndefined(top)) {
			return this.get(0).scrollTop;
		}
		this.optimizedCb(ele => {
			ele.scrollTop = top;
		});
	}
}

/* harmony default export */ __webpack_exports__["a"] = ((selector, context) => {
	return new Vquery(selector, context);
});

/***/ })
/******/ ]);