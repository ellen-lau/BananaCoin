const tooltips = [].slice.call(document.querySelectorAll('.term-tooltip'))
const termDefs = [].slice.call(document.querySelectorAll('.term-highlight'))

let i = 0

tooltips.forEach(function(tooltip) {

  const tooltipDef = termDefs[i]
  const tooltipSpan = tooltip.querySelector('.term-definition')

  tooltipDef.onmouseenter = function(e) {
    tooltipSpan.style.visibility = 'visible'
    tooltipSpan.style.opacity = 1
  }

  tooltipDef.onmouseleave = function(e) {
    tooltipSpan.style.visibility = 'hidden'
    tooltipSpan.style.opacity = 0
  }

  i = i + 1

})

console.log(termDefs)
