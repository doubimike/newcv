import resumeMarkdown from './data/resume'
import $ from './vQuery'

let $resumeWrap = $('#app .resume-wrap')
let resumeWrap = $resumeWrap.get(0)
let $resumetag = $('.resume-tag', resumeWrap)
let $resumeMarkdown = $('.resume-markdown', resumeWrap)

let currentMarkdown = '';
let length = resumeMarkdown.length;
let timer = null;
let delay = 60;
let start = 0;
let iClass = 'htmlMode';


let markdownToHtml = (callback) =>{
	console.log('markdownToHtml')
	$resumeMarkdown.css({
		display: 'none'
	})

	$resumeWrap.addClass(iClass);
	$resumetag.html(marked(resumeMarkdown));

	callback && callback();
}



let showResume = (callback) =>{
	clearInterval(timer);
	timer = setInterval(() =>{
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

export default {
	showResume,
  markdownToHtml
}