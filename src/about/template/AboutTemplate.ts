export default class AboutTemplate {
  constructor(private readonly info: { name: string; role: string; description: string; email: string }) {}

  readonly getHTML = (): HTMLElement => {
    const div = document.createElement('div')
    div.classList.add('about-container')
    div.innerHTML = `
      <h2>About Me</h2>
      <p><strong>${this.info.name}</strong> — ${this.info.role}</p>
      <p>${this.info.description}</p>
      <p><a href="mailto:${this.info.email}">${this.info.email}</a></p>
    `
    return div
  }
}
