// console.log(getEles('#content'))
// showStyles(0,function () {
// 	markdownToHtml()
// })
showStyles(0,function () {
	showResume(function () {
		showStyles(1,function () {
			markdownToHtml(function () {
				showStyles(2)
			})
		})
	})
})
