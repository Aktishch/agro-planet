const visibilityPassword = (event: Event): void => {
  const password = event.target as HTMLButtonElement
  const label = password.closest('[data-label]') as HTMLLabelElement
  const input = label.querySelector(
    '*[data-input="password"]'
  ) as HTMLInputElement
  const icon = password.querySelector('use') as SVGUseElement

  switch (input.type) {
    case 'password': {
      input.type = 'text'
      icon.setAttribute('xlink:href', 'img/icons.svg#eye-hidden')
      break
    }

    case 'text': {
      input.type = 'password'
      icon.setAttribute('xlink:href', 'img/icons.svg#eye-visible')
      break
    }
  }
}

export default (): void => {
  document.addEventListener('click', ((event: Event): void => {
    if ((event.target as HTMLButtonElement).closest('[data-password]'))
      visibilityPassword(event)
  }) as EventListener)
}
