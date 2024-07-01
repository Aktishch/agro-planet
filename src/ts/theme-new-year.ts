export default (): void => {
  const currentYear: number = new Date().getFullYear()
  const startTime: number = new Date(
    `December 01 ${currentYear} 00:00:00`
  ).getTime()
  const endTime: number = new Date(
    `January 15 ${currentYear + 1} 00:00:00`
  ).getTime()
  const currentTime: number = new Date().getTime()

  if (currentTime >= startTime && currentTime <= endTime) {
    const html = document.documentElement as HTMLElement
    const icons = html.querySelectorAll(
      '*[data-new-year-icon]'
    ) as NodeListOf<SVGSVGElement>

    html.classList.add('theme-new-year')

    icons.forEach((icon: SVGSVGElement): void => {
      if (!icon) return

      const use = icon.querySelector('use') as SVGUseElement

      use.setAttribute('xlink:href', String(icon.dataset.newYearIcon))
    })
  }
}
