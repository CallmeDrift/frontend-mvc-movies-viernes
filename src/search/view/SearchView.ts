import Observer from '../../shared/Observer/Observer.js'
import SearchModel from '../model/SearchModel.js'


export default class SearchView extends Observer<SearchModel> {
  private readonly input: HTMLInputElement
  private readonly container: HTMLElement

  constructor(subject: SearchModel, container: HTMLElement) {
    super(subject)
    this.container = container

    // Crear el input de búsqueda
    this.input = document.createElement('input')
    this.input.type = 'text'
    this.input.placeholder = 'Buscar por título, año, género o sinopsis...'
    this.input.classList.add('search-bar')

    // Escuchar cambios
    this.input.addEventListener('input', (event) => this.handleSearch(event))

    this.container.appendChild(this.input)
  }

readonly handleSearch = (event: Event): void => {
  const target = event.target as HTMLInputElement
  const searchModel = this.subject as SearchModel  
  searchModel.setQuery(target.value)
}

  readonly update = (): void => {
    const searchModel = this.subject as SearchModel  
    console.log('🔍 Query actualizada:', searchModel.getQuery())
  }
}
