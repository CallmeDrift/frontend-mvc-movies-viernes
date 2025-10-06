import Subject from '../../shared/Observer/Subject.js'

export default class SearchModel extends Subject<SearchModel> {
  private query: string

  constructor() {
    super()
    this.query = ''
  }

  readonly getQuery = (): string => this.query

  readonly setQuery = (newQuery: string): void => {
    this.query = newQuery.toLowerCase()
    this.notifyAllObservers()
  }
}
