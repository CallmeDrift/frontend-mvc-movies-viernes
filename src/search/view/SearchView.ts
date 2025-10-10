import SearchModel from "../model/SearchModel"

export default class SearchView {
  private readonly form: HTMLElement
  private readonly input: HTMLInputElement

  constructor(private readonly model: SearchModel, container: HTMLElement) {
    // Buscar el formulario existente dentro del contenedor
    this.form = container.querySelector('#search') as HTMLElement
    this.input = this.form.querySelector('input') as HTMLInputElement

    this.initEvents()
  }

  private initEvents = (): void => {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault() // ❌ evita que recargue la página

      const query = this.input.value.trim()
      if (!query) return

      this.model.search(query)
    })
  }
}
