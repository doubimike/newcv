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


import stylesEditor from './stylesEditor'

let { showStyles } = stylesEditor

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
showStyles(0)
// showStyles(2)
// 回调太恶心，后面应该换成其他的形式完成
