
var body = document.body,
html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight );

console.log(`height: ${height}`)

const progressBar = document.querySelector('.progress');

progressBar.setAttribute("max", height)
progressBar.setAttribute("value", $(window).scrollTop())

const progressUpdateOnScroll = () => {
  // HARDCODED: if near the bottom, set it to 100%
  if ($(window).scrollTop() >= height*0.9) {
    progressBar.setAttribute("value", height)
  } else {
    progressBar.setAttribute("value", $(window).scrollTop())
  }
}

$(function () {
  $(window).on('scroll', function () {
    progressUpdateOnScroll()
  })
})