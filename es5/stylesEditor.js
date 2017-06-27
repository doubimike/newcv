(function(global) {
  


  var $stylesWrap = $('#app .styles-wrap');
  console.log('$stylesWrap', $stylesWrap)

  var stylesWrap = $stylesWrap.get(0)
  console.log('stylesWrap', stylesWrap)
  var $style = $('style', stylesWrap)
  console.log('$style', $style)
  var $stylePre = $('pre', stylesWrap)
  console.log('$stylePre', $stylePre)


  var currentStyle = ''
  var delay = 60
  var timer = null
  var MAX_HEIGHT = $stylesWrap.height()
  console.log('MAX_HEIGHT', MAX_HEIGHT)

  var goBottom = function(top) {
    $stylesWrap.scrollTop(top);
  }



  function showStyles(num, callback) {
    var style = styles[num];
    console.log('style', style)
    var length;
    var prevLength;
    if (!style) {
      return;
    }

    length = styles.filter(function(item, i) {
      return i <= num;
    }).reduce(function(result, item) {
      result += item.length;
      return result;
    }, 0);

    console.log('length', length)

    prevLength = length - style.length
    console.log('prevLength', prevLength)
    clearInterval(timer);

    timer = setInterval(function() {
      var start = currentStyle.length - prevLength;
      console.log('start', start)
      var char = style.substring(start, start + 1) || '';
      console.log('char', char)
      currentStyle += char;
      console.log('currentStyle', currentStyle)
      console.log('currentStyle.length', currentStyle.length)
      if (currentStyle.length === length) {
        clearInterval(timer);
        callback && callback();

      } else {
        console.log('$stylePre.height()', $stylePre.height())
        console.log('MAX_HEIGHT', MAX_HEIGHT)
        var top = $stylePre.height() - MAX_HEIGHT;
        console.log('top', top)
        if (top > 0) {
          goBottom(top);
        }
        $style.html(currentStyle)
        $stylePre.html(Prism.highlight(currentStyle, Prism.languages.css))
      }
      // clearTimeout(timer);
    }, delay);

  }

  global.showStyles = showStyles;


})(window);