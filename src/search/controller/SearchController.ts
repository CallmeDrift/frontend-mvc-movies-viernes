import SearchModel from '../model/SearchModel.js'
import SearchView from '../view/SearchView.js'
import MovieModel from '../../movie/model/MovieModel.js'
import Observer from '../../shared/Observer/Observer.js'


export default class SearchController {
  private readonly model: SearchModel
  private readonly view: SearchView

  constructor(container: HTMLElement, movieModel?: MovieModel) {
    this.model = new SearchModel()
    this.view = new SearchView(this.model, container)

    if (movieModel) {
      new Observer(this.model, () => {
        const q = this.model.getQuery()
        movieModel.filterMovies(q)
      })
    }
  }

  readonly initComponent = (): void => {
    const form = document.querySelector('#search') as HTMLElement
    const input = form.querySelector('input') as HTMLInputElement
    console.log(this.view)

    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const query = input.value.trim()
      console.log('Buscando:', query)
      this.model.setQuery(query)
    })
  }

  readonly getModel = (): SearchModel => this.model
}
