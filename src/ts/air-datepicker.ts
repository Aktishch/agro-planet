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
  const calendarInputs = document.querySelectorAll(
    '*[data-input="calendar"]'
  ) as NodeListOf<HTMLInputElement>
  const dateInputs = document.querySelectorAll(
    '*[data-input="date"]'
  ) as NodeListOf<HTMLInputElement>

  calendarInputs.forEach((calendarInput: HTMLInputElement): void => {
    if (!calendarInput) return

    new window.AirDatepicker(calendarInput, {
      locale: localeRu,
      isMobile: touchDevice(),
      autoClose: true,
    })
  })

  dateInputs.forEach((dateInput: HTMLInputElement): void => {
    if (!dateInput) return

    new window.AirDatepicker(dateInput, {
      locale: localeRu,
      isMobile: touchDevice(),
      autoClose: true,
      minDate: new Date(),
    })
  })
}
