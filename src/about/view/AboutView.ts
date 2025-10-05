import AboutTemplate from '../template/AboutTemplate.js'

export default class AboutView {
  constructor(private readonly parent: HTMLElement) {}

  readonly render = (info: { name: string; role: string; description: string; email: string }) => {
    this.parent.innerHTML = ''
    const template = new AboutTemplate(info)
    this.parent.appendChild(template.getHTML())
  }
}
