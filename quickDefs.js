const tooltips = [].slice.call(document.querySelectorAll('.term-highlight'))

tooltips.forEach(function(tooltip) {
  const tooltipSpan = tooltip.querySelector('.term-definition')

  tooltip.onmouseenter = function(e) {
    tooltipSpan.style.opacity = 1
  }

  tooltip.onmouseleave = function(e) {
    tooltipSpan.style.opacity = 0
  }
})