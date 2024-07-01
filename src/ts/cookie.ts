export default (): void => {
  document.addEventListener('click', ((event: Event): void => {
    if (
      (event.target as HTMLButtonElement).hasAttribute('data-cookie-button')
    ) {
      const banner = (event.target as HTMLButtonElement).closest(
        '[data-cookie]'
      ) as HTMLDivElement
      const id: string = banner.id
      const path: string = String(banner.dataset.cookie) || ''

      document.cookie = `cookie_${id}_active=1; path=${path}; max-age=${7 * 24 * 60 * 60}`
      banner.remove()
    }
  }) as EventListener)
}
