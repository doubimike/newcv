(function (global) {
	var resumeMarkdown = `王敏 qianlongo
----

一只迷途的前端小码农，徜徉在计算机的世界，渴望成为一名有点点厉害的全栈开发工程师

技能
----

* 前端开发
* node.js 开发
* php
* python

工作经历
----

1. 阿里巴巴天猫集团实习
2. 沪江网前端开发工程师
3. ...

链接
----

* [GitHub](https://github.com/qianlongo)
* [我的文章](https://qianlongo.github.io/)

> 如果你喜欢这个效果，Fork [我的项目](https://github.com/qianlongo/resume-native)，打造你自己的简历！

`;

var $resumeWrap = $('#app .resume-wrap')
var resumeWrap = $resumeWrap.get(0)
var $resumetag = $('.resume-tag', resumeWrap)
var $resumeMarkdown = $('.resume-markdown', resumeWrap)

var currentMarkdown = '';
var length = resumeMarkdown.length;
var timer = null;
var delay = 60;
var start = 0;
var iClass = 'htmlMode';


var markdownToHtml = function(callback) {
	console.log('markdownToHtml')
	$resumeMarkdown.css({
		display: 'none'
	})

	$resumeWrap.addClass(iClass);
	$resumetag.html(marked(resumeMarkdown));

	callback && callback();
}



var showResume = function(callback) {
	clearInterval(timer);
	timer = setInterval(function() {
		currentMarkdown += resumeMarkdown.substring(start, start + 1);
		if (currentMarkdown.length === length) {
			clearInterval(timer)
			callback && callback()
		} else {
			$resumeMarkdown.html(currentMarkdown)
			start++
		}
	},delay);
}


global.showResume = showResume;	
})(window);
