import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'

export const initPromoSlider = () => {
  new Swiper('.js-promoSlider', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        spaceBetween: 10
      },
    },
    pagination: {
      el: ".promo-slider__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".promo-slider__next",
      prevEl: ".promo-slider__prev",
    },
  });
}

