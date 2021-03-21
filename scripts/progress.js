
var body = document.body,
html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight );

console.log(`height: ${height}`)

const progressBar = document.querySelector('.progress');

progressBar.setAttribute("max", height)
progressBar.setAttribute("value", $(window).scrollTop())

const progressUpdateOnScroll = () => {
  progressBar.setAttribute("value", $(window).scrollTop())
}

$(function () {
  $(window).on('scroll', function () {
    progressUpdateOnScroll()
  })
})