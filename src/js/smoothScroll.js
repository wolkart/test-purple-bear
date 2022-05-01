export const smoothScroll = () => {
  document.addEventListener("click", event => {
    const {target} = event
    const button = target.closest('[data-button-scroll]')

    if (!button) return

    if (button) {
      const attr = button.dataset.buttonScroll

      document.querySelector(`[data-anchor-scroll="${attr}"]`).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  })
}