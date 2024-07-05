import { fileHandler } from './functions/file-handler'

export default (): void => {
  const dragEvents: string[] = ['dragenter', 'dragover', 'dragleave', 'drop']

  dragEvents.forEach((dragEvent: string): void => {
    document.addEventListener(dragEvent, ((event: DragEvent): void => {
      if ((event.target as HTMLElement).closest('[data-drag]')) {
        event.preventDefault()

        const drag = (event.target as HTMLElement).closest(
          '[data-drag]'
        ) as HTMLLabelElement
        const download = drag.closest('[data-download]') as HTMLDivElement
        const input = download.querySelector(
          '*[data-input="file"]'
        ) as HTMLInputElement
        const pack = download.querySelector('*[data-pack]') as HTMLDivElement
        const error = download.querySelector('*[data-error]') as HTMLSpanElement
        const image = download.querySelector(
          '*[data-file="image"]'
        ) as HTMLImageElement

        switch (event.type) {
          case 'dragenter': {
            drag.classList.add('bg-opacity-50')
            break
          }

          case 'dragleave': {
            drag.classList.remove('bg-opacity-50')
            break
          }

          case 'drop': {
            const files = (event.dataTransfer as DataTransfer).files as FileList

            drag.classList.remove('bg-opacity-50')
            input.files = files

            const file = (input.files as FileList)[0] as File
            const readFile = new FileReader() as FileReader

            file ? readFile.readAsDataURL(file) : (image.src = '')

            readFile.addEventListener('loadend', ((): void => {
              if (!fileHandler({ input: input, error: error })) return

              image.src = String(readFile.result)
              drag.classList.add('pointer-events-none', 'opacity-50')
              pack.classList.remove('hidden')
            }) as EventListener)

            break
          }
        }
      }
    }) as EventListener)
  })
}
