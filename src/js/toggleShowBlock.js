export const toggleShowBlock = () => {
  document.addEventListener('click', e => {
    const {target} = e
    const button = target.closest('[data-button-toggle]')

    if (!button) return

    if (button) {
      const block = document.querySelector(`[data-block-toggle="${button.dataset.buttonToggle}"]`)

      button.classList.toggle('active')
      block.classList.toggle('show')
    }
  })
}