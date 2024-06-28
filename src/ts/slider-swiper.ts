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
// import { checkQuizSlide } from './quiz'

declare global {
  interface Window {
    Swiper: typeof Swiper
  }
}

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs])
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper

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
    }) as Swiper
  })
  // new window.Swiper('.gallery-slider .swiper', {
  //   pagination: {
  //     el: '.gallery-slider .swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     prevEl: '.gallery-slider .swiper-button-prev',
  //     nextEl: '.gallery-slider .swiper-button-next',
  //   },
  //   effect: 'coverflow',
  //   slidesPerView: 1.3,
  //   spaceBetween: 20,
  //   grabCursor: true,
  //   loop: true,
  //   freeMode: true,
  //   breakpoints: {
  //     [media.sm]: {
  //       slidesPerView: 2,
  //     },
  //     [media.lg]: {
  //       slidesPerView: 3,
  //     },
  //   },
  //   autoplay: {
  //     delay: 3000,
  //     stopOnLastSlide: false,
  //     disableOnInteraction: false,
  //   },
  // }) as Swiper
  // new window.Swiper('.products-slider .swiper', {
  //   pagination: {
  //     el: '.products-slider .swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     prevEl: '.products-slider .swiper-button-prev',
  //     nextEl: '.products-slider .swiper-button-next',
  //   },
  //   slidesPerView: 1.3,
  //   slidesPerGroup: 1,
  //   spaceBetween: 20,
  //   grabCursor: true,
  //   watchSlidesProgress: true,
  //   breakpoints: {
  //     [media.sm]: {
  //       slidesPerView: 2,
  //     },
  //     [media.lg]: {
  //       slidesPerView: 3,
  //     },
  //     [media.xl]: {
  //       slidesPerView: 4,
  //     },
  //   },
  // }) as Swiper
  // const quizImages = new window.Swiper('.quiz-images .swiper', {
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 20,
  //   allowTouchMove: false,
  // }) as Swiper
  // new window.Swiper('.quiz-slider .swiper', {
  //   navigation: {
  //     prevEl: '.quiz-slider .swiper-button-prev',
  //     nextEl: '.quiz-slider .swiper-button-next',
  //   },
  //   pagination: {
  //     el: '.quiz-slider .swiper-pagination',
  //     type: 'custom',
  //     renderCustom: (
  //       swiper: Swiper,
  //       current: number,
  //       total: number
  //     ): string => {
  //       return String(total - current)
  //     },
  //   },
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   allowTouchMove: false,
  //   watchSlidesProgress: true,
  //   on: {
  //     slideChange: (swiper: Swiper): void => {
  //       quizImages.slideTo(swiper.activeIndex)
  //       checkQuizSlide(swiper.visibleSlides[0])
  //       switch (
  //         swiper.visibleSlides[0] === swiper.slides[swiper.slides.length - 1]
  //       ) {
  //         case true: {
  //           ;(swiper.el.closest('[data-quiz]') as HTMLElement).setAttribute(
  //             'data-quiz-end',
  //             ''
  //           )
  //           break
  //         }
  //         case false: {
  //           ;(swiper.el.closest('[data-quiz]') as HTMLElement).removeAttribute(
  //             'data-quiz-end'
  //           )
  //           break
  //         }
  //       }
  //     },
  //   },
  // }) as Swiper
  // const descriptionBg = new window.Swiper('.description-bg .swiper', {
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   speed: 1000,
  //   allowTouchMove: false,
  // }) as Swiper
  // const descriptionBullets = new window.Swiper('.description-bullets .swiper', {
  //   slidesPerView: 3,
  //   slidesPerGroup: 1,
  //   spaceBetween: 20,
  //   speed: 1000,
  //   grabCursor: true,
  //   breakpoints: {
  //     [media.md]: {
  //       slidesPerView: 4,
  //     },
  //   },
  // }) as Swiper
  // const descriptionInfo = new window.Swiper('.description-info .swiper', {
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   speed: 1000,
  //   allowTouchMove: false,
  // }) as Swiper
  // new window.Swiper('.description-slider .swiper', {
  //   slidesPerView: 1,
  //   slidesPerGroup: 1,
  //   spaceBetween: 30,
  //   speed: 1000,
  //   grabCursor: true,
  //   thumbs: {
  //     swiper: descriptionBullets,
  //   },
  //   on: {
  //     slideChange: (swiper: Swiper): void => {
  //       descriptionBg.slideTo(swiper.activeIndex)
  //       descriptionInfo.slideTo(swiper.activeIndex)
  //     },
  //   },
  // }) as Swiper
}
