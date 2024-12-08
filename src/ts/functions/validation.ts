export const validation = (form: HTMLFormElement): boolean => {
  const labels = form.querySelectorAll(
    '*[data-label="input"]'
  ) as NodeListOf<HTMLLabelElement>
  let validate = true

  labels.forEach((label: HTMLLabelElement): void => {
    if (!label) return

    const input = label.querySelector('*[data-input]') as HTMLInputElement
    const error = label.querySelector('*[data-error]') as HTMLSpanElement

    if (!input && !error) return

    const inputError = (): void => {
      input.focus()
      input.classList.add('input-error')
      error.classList.add('visible', 'opacity-100')
      validate = false
    }

    const emailFormat = (value: string): boolean => {
      return !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(value)
    }

    switch (
      input.value === null ||
      input.value === '' ||
      input.value.length === 0
    ) {
      case true: {
        inputError()
        break
      }

      case false: {
        input.classList.remove('input-error')
        error.classList.remove('visible', 'opacity-100')
        break
      }
    }

    switch (input.dataset.input) {
      case 'name': {
        if (input.value.length === 1) inputError()
        break
      }

      case 'tel': {
        switch (input.value[0]) {
          case '+': {
            if (input.value.length > 0 && input.value.length < 18) {
              error.innerText = 'Некорректный номер телефона'
              inputError()
            }

            break
          }

          default: {
            error.innerText = 'Введите номер телефона'
            break
          }
        }

        break
      }

      case 'email': {
        if (emailFormat(input.value)) inputError()
        break
      }

      case 'text': {
        if (input.value.length > 0 && input.value.length < 10) {
          error.innerText = 'Введите не менее 10 символов'
          inputError()
        } else {
          error.innerText = 'Заполните это поле'
        }

        break
      }
    }

    input.addEventListener(
      'input',
      ((): void => {
        if (input.value.length > 0) {
          input.classList.remove('input-error')
          error.classList.remove('visible', 'opacity-100')
        }
      }) as EventListener,
      { once: true }
    )
  })

  return validate
}
