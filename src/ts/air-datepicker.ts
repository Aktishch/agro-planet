import AirDatepicker from 'air-datepicker'
import localeRu from 'air-datepicker/locale/ru'
import { touchDevice } from './functions/touch-device'

declare global {
  interface Window {
    AirDatepicker: typeof AirDatepicker
  }
}

window.AirDatepicker = AirDatepicker

export default (): void => {
  const inputs = document.querySelectorAll(
    '*[data-input="calendar"]'
  ) as NodeListOf<HTMLInputElement>

  inputs.forEach((input: HTMLInputElement): void => {
    if (!input) return

    new window.AirDatepicker(input, {
      locale: localeRu,
      isMobile: touchDevice(),
      autoClose: true,
      minDate: new Date(),
    })
  })
}
