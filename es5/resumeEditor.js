(function (global) {
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
global.markdownToHtml = markdownToHtml;	
})(window);
