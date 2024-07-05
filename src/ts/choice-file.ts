import { fileHandler } from './functions/file-handler'

const choiceFile = (event: Event): void => {
  const input = event.target as HTMLInputElement
  const download = input.closest('[data-download]') as HTMLDivElement
  const drag = download.querySelector('*[data-drag]') as HTMLLabelElement
  const pack = download.querySelector('*[data-pack]') as HTMLDivElement
  const error = download.querySelector('*[data-error]') as HTMLSpanElement
  const image = download.querySelector(
    '*[data-file="image"]'
  ) as HTMLImageElement

  if (!image) return

  const file = (input.files as FileList)[0] as File
  const readFile = new FileReader() as FileReader

  file ? readFile.readAsDataURL(file) : (image.src = '')

  readFile.addEventListener('loadend', ((): void => {
    if (!fileHandler({ input: input, error: error })) return

    image.src = String(readFile.result)
    drag.classList.add('pointer-events-none', 'opacity-50')
    pack.classList.remove('hidden')
  }) as EventListener)
}

const fileRemove = (event: Event): void => {
  const download = (event.target as HTMLButtonElement).closest(
    '[data-download]'
  ) as HTMLDivElement
  const drag = download.querySelector('*[data-drag]') as HTMLLabelElement
  const input = download.querySelector(
    '*[data-input="file"]'
  ) as HTMLInputElement
  const pack = download.querySelector('*[data-pack]') as HTMLDivElement
  const image = download.querySelector(
    '*[data-file="image"]'
  ) as HTMLImageElement

  drag.classList.remove('pointer-events-none', 'opacity-50')
  input.value = ''
  pack.classList.add('hidden')
  image.src = ''
}

export default (): void => {
  document.addEventListener('change', ((event: Event): void => {
    if (
      (event.target as HTMLInputElement).getAttribute('data-input') === 'file'
    )
      choiceFile(event)
  }) as EventListener)

  document.addEventListener('click', ((event: Event): void => {
    if ((event.target as HTMLButtonElement).closest('[data-file-remove]'))
      fileRemove(event)
  }) as EventListener)
}
