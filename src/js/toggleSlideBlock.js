import {slideToggle} from "./slide-toggle";

export const toggleSlideBlock = () => {
  document.addEventListener('click', e => {
    const {target} = e
    const button = target.closest('[data-button-slide]')

    if (!button) return

    if (button) {
      button.classList.toggle('active')

      slideToggle(button.nextElementSibling)
    }
  })
}