export default class NotFoundView {
  constructor(private readonly parent: HTMLElement) {}

  readonly render = (info: { title: string; message: string; homeLink: string }) => {
    this.parent.innerHTML = `
      <div class="not-found">
        <h1>${info.title}</h1>
        <p>${info.message}</p>
      </div>
    `
  }
}
