import SearchModel from '../model/SearchModel.js'
import SearchView from '../view/SearchView.js'
import MovieModel from '../../movie/model/MovieModel.js'

export default class SearchController {
  private readonly model: SearchModel
  private readonly view: SearchView

  constructor(container: HTMLElement, movieModel?: MovieModel) {
    this.model = new SearchModel()
    this.view = new SearchView(this.model, container)

    // Si nos pasan el MovieModel, conectamos el filtrado directamente
    if (movieModel) {
      // usamos attach con un objeto - casteamos a any para evitar problemas de tipos con Observer abstracto
      this.model.attach({
        update: () => {
          const q = this.model.getQuery()
          movieModel.filterMovies(q)
        },
      } as any)
    }
  }

  readonly initComponent = (): void => {
    // ya está renderizado en el constructor; si quieres lógica extra, aquí
  }

  readonly getModel = (): SearchModel => this.model
}
