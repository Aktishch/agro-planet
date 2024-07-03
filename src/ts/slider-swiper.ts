import Swiper from 'swiper'
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Grid,
  Thumbs,
} from 'swiper/modules'
import { media } from './functions/media'

declare global {
  interface Window {
    Swiper: typeof Swiper
  }
}

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs])
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper

const createProductionSliders = (): void => {
  const productionSliders = document.querySelectorAll(
    '.production-slider'
  ) as NodeListOf<HTMLDivElement>

  productionSliders.forEach((productionSlider: HTMLDivElement): void => {
    if (!productionSlider) return

    const productionSwiper = productionSlider.querySelector(
      '.swiper'
    ) as HTMLDivElement
    const productionButtonPrev = productionSlider.querySelector(
      '.swiper-button-prev'
    ) as HTMLButtonElement
    const productionButtonNext = productionSlider.querySelector(
      '.swiper-button-next'
    ) as HTMLButtonElement

    new window.Swiper(productionSwiper, {
      navigation: {
        prevEl: productionButtonPrev,
        nextEl: productionButtonNext,
      },
      slidesPerView: 1.4,
      slidesPerGroup: 1,
      spaceBetween: 16,
      speed: 300,
      grabCursor: true,
      watchSlidesProgress: true,
      loop: true,
      breakpoints: {
        [media.sm]: {
          slidesPerView: 1.7,
          spaceBetween: 20,
        },
        [media.md]: {
          slidesPerView: 1,
        },
        [media.lg]: {
          slidesPerView: 1.6,
          spaceBetween: 24,
        },
        [media.xl]: {
          slidesPerView: 2.7,
        },
      },
      autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
    }) as Swiper
  })
}

const createProductSlider = (): void => {
  const productSliderBullets = document.querySelector(
    '.product-bullets'
  ) as HTMLDivElement

  if (!productSliderBullets) return

  const productBulletsSwiper = productSliderBullets.querySelector(
    '.swiper'
  ) as HTMLDivElement

  const productionBullets = new window.Swiper(productBulletsSwiper, {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 8,
    speed: 300,
    grabCursor: true,
    watchSlidesProgress: true,
    breakpoints: {
      [media.sm]: {
        spaceBetween: 12,
      },
      [media.md]: {
        spaceBetween: 16,
      },
      [media.lg]: {
        spaceBetween: 20,
      },
      [media.xl]: {
        spaceBetween: 24,
      },
    },
  }) as Swiper

  new window.Swiper('.product-slider .swiper', {
    pagination: {
      el: '.product-slider .swiper-pagination',
      type: 'custom',
      renderCustom: (
        swiper: Swiper,
        current: number,
        total: number
      ): string => {
        return `<span class="font-semibold">${current}</span><span class="opacity-60">/${total}</span>`
      },
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    speed: 300,
    grabCursor: true,
    watchSlidesProgress: true,
    thumbs: {
      swiper: productionBullets,
    },
  }) as Swiper
}

export default (): void => {
  new window.Swiper('.categories-slider .swiper', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 16,
    grabCursor: true,
    allowTouchMove: true,
    watchSlidesProgress: true,
    breakpoints: {
      [media.lg]: {
        grabCursor: false,
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  }) as Swiper

  new window.Swiper('.primal-slider .swiper', {
    navigation: {
      prevEl: '.primal-slider .swiper-button-prev',
      nextEl: '.primal-slider .swiper-button-next',
    },
    slidesPerView: 1.1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 300,
    grabCursor: true,
    watchSlidesProgress: true,
    loop: true,
    breakpoints: {
      [media.sm]: {
        slidesPerView: 1.5,
      },
      [media.md]: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      [media.lg]: {
        slidesPerView: 2.5,
        spaceBetween: 24,
      },
      [media.xl]: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
    autoplay: {
      delay: 2500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  }) as Swiper

  new window.Swiper('.more-slider .swiper', {
    navigation: {
      prevEl: '.more-slider .swiper-button-prev',
      nextEl: '.more-slider .swiper-button-next',
    },
    slidesPerView: 1.1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 300,
    grabCursor: true,
    watchSlidesProgress: true,
    loop: true,
    breakpoints: {
      [media.sm]: {
        slidesPerView: 1.5,
      },
      [media.md]: {
        slidesPerView: 2,
      },
      [media.lg]: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      [media.xl]: {
        slidesPerView: 4,
      },
    },
    autoplay: {
      delay: 2500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  }) as Swiper

  createProductionSliders()
  createProductSlider()
}
