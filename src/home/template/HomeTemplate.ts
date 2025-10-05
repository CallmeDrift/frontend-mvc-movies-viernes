export default class HomeTemplate {
  constructor(
    private readonly data: {
      image: string
      song1: { title: string; lyrics: string }
      song2: { title: string; lyrics: string }
    }
  ) {}

  readonly getHTML = (): HTMLElement => {
    const div = document.createElement('div')
    div.classList.add('home-container')

    div.innerHTML = `
      <img src="${this.data.image}" alt="Linkin Park" class="home-image" />
      <div class="song">
        <h3>${this.data.song1.title}</h3>
        <p>${this.data.song1.lyrics}</p>
      </div>
      <div class="song">
        <h3>${this.data.song2.title}</h3>
        <p>${this.data.song2.lyrics}</p>
      </div>
    `
    return div
  }
}
