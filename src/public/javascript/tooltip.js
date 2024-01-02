const icons = document.querySelectorAll('[data-tooltip]')

for (const icon of icons) {
  icon.addEventListener('mouseover', ({ target }) => {
    const element = document.createElement('span')

    element.innerHTML = target.dataset.tooltip
    element.id = `tooltip-${target.id}`
    element.classList.add('tooltip')
    
    document.body.appendChild(element)
    
    element.style.top = `${target.offsetTop - element.offsetHeight}px`
    element.style.left = `${target.offsetLeft + target.offsetWidth/2 - element.offsetWidth/2}px`
  })

  icon.addEventListener('mouseout', ({ target }) => {
    if(document.querySelector(`#tooltip-${target.id}`))
      document.querySelector(`#tooltip-${target.id}`).remove()
  })
}