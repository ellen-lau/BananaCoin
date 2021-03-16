const tooltips = [].slice.call(document.querySelectorAll('.term-highlight'))

tooltips.forEach(function(tooltip) {
  const tooltipSpan = tooltip.querySelector('.term-definition')

  tooltip.onmouseenter = function(e) {
    tooltipSpan.style.transition = 'all 1s ease-in'
    tooltipSpan.style.display = 'block'
  }

  tooltip.onmouseleave = function(e) {
    tooltipSpan.style.display = 'none'
  }
})