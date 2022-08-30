//
let cssList = document.getElementsByClassName('manual_chapter')
let cssList2 = $('.manual_chapter')
let cssList3 = $('dd>dl')

$.each(cssList3, function (i, n) {
  // console.log(i, typeof n)
    $.each($(n).children(), function (_i, _n) {
      console.log($(_n).find('a').attr('title'))
    })
})
// $('dd>dl')[0]

// $('dd>dl>label[class*="manual_chapter_child_child"]')
