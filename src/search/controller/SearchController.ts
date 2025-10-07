import SearchModel from '../model/SearchModel.js'
import SearchView from '../view/SearchView.js'
import MovieModel from '../../movie/model/MovieModel.js'

export default class SearchController {
  private readonly model: SearchModel
  private readonly view: SearchView

  constructor(container: HTMLElement, movieModel?: MovieModel) {
    this.model = new SearchModel()
    this.view = new SearchView(this.model, container)


    if (movieModel) {
      this.model.attach({
        update: () => {
          const q = this.model.getQuery()
          movieModel.filterMovies(q)
        },
      } as any)
    }
  }

  readonly initComponent = (): void => {
    const form = document.querySelector('#search') as HTMLFormElement
    const input = form.querySelector('input') as HTMLInputElement

    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const query = input.value.trim()
      console.log('Buscando:', query)
      this.model.setQuery(query)
    })
  }
  readonly getModel = (): SearchModel => this.model
}
