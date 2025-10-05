import HomeTemplate from '../template/HomeTemplate.js'

export default class HomeView {
  constructor(private readonly parent: HTMLElement) {}

  readonly render = (data: {
    image: string
    song1: { title: string; lyrics: string }
    song2: { title: string; lyrics: string }
  }) => {
    this.parent.innerHTML = ''
    const template = new HomeTemplate(data)
    this.parent.appendChild(template.getHTML())
  }
}
