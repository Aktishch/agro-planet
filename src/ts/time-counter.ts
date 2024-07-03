export default (): void => {
  const counter = document.querySelector('*[data-counter]') as HTMLDivElement

  if (!counter) return

  const units = counter.querySelectorAll(
    '*[data-counter-unit]'
  ) as NodeListOf<HTMLSpanElement>
  const date: number = new Date(
    Number(counter.dataset.year),
    Number(counter.dataset.month) - 1,
    Number(counter.dataset.day),
    Number(counter.dataset.hour) || 0,
    Number(counter.dataset.minute) || 0,
    Number(counter.dataset.second) || 0
  ).getTime()

  const getTimeCounter = (): void => {
    const distance: number = date - new Date().getTime()
    const day: number = 24 * 60 * 60 * 1000
    const hour: number = 60 * 60 * 1000
    const minute: number = 60 * 1000

    const values = [
      Math.floor(distance / day),
      Math.floor((distance % day) / hour),
      Math.floor((distance % hour) / minute),
      Math.floor((distance % minute) / 1000),
    ]

    units.forEach(
      (element: HTMLSpanElement, index: number): string =>
        (element.textContent = String(values[index]))
    )

    if (distance < 0) removeTimeCounter()
  }

  const interval = setInterval(getTimeCounter, 1000)

  const removeTimeCounter = (): void => {
    clearInterval(interval)
    counter.remove()
  }

  getTimeCounter()
}
