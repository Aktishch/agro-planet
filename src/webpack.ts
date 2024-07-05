import fancybox from './ts/fancybox'
import sliderSwiper from './ts/slider-swiper'
import yandexMap from './ts/yandex-map'
import airDatepicker from './ts/air-datepicker'
import currentTab from './ts/current-tab'
import cookie from './ts/cookie'
import sidebar from './ts/sidebar'
import menu from './ts/menu'
import scrollTo from './ts/scroll-to'
import themeNewYear from './ts/theme-new-year'
import waved from './ts/waved'
import accordion from './ts/accordion'
import submitHandler from './ts/submit-handler'
import dragAndDrop from './ts/drag-and-drop'
import choiceFile from './ts/choice-file'
import inputs from './ts/inputs'
import phoneMask from './ts/phone-mask'
import password from './ts/password'
import range from './ts/range'
import shop from './ts/shop'
import timeCounter from './ts/time-counter'
import preloader from './ts/preloader'

import './scss/main.scss'

const initialization = (): void => {
  fancybox()
  sliderSwiper()
  yandexMap()
  airDatepicker()
  currentTab()
  cookie()
  sidebar()
  menu()
  scrollTo()
  themeNewYear()
  waved()
  accordion()
  submitHandler()
  dragAndDrop()
  choiceFile()
  inputs()
  phoneMask()
  password()
  range()
  shop()
  timeCounter()
  preloader()
}

window.addEventListener('DOMContentLoaded', initialization as EventListener)
