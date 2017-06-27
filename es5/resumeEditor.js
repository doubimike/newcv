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

var re_currentMarkdown = '';
var re_length = resumeMarkdown.length;
var re_timer = null;
var re_delay = 60;
var re_start = 0;
var re_iClass = 'htmlMode';


var markdownToHtml = function(callback) {
	console.log('markdownToHtml')
	$resumeMarkdown.css({
		display: 'none'
	})

	$resumeWrap.addClass(re_iClass);
	$resumetag.html(marked(resumeMarkdown));

	callback && callback();
}



var showResume = function(callback) {
	clearInterval(re_timer);
	re_timer = setInterval(function() {
		re_currentMarkdown += resumeMarkdown.substring(re_start, re_start + 1);
		if (re_currentMarkdown.length === re_length) {
			clearInterval(re_timer)
			callback && callback()
		} else {
			$resumeMarkdown.html(re_currentMarkdown)
			re_start++
		}
	},re_delay);
}

