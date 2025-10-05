import Subject from '../../shared/Observer/Subject.js'
import Movie from '../types/Movie.js'
import MovieView from '../view/MovieView.js'

export default class MovieModel extends Subject<MovieView> {
  private movies: Movie[]
  private currentPage: number
  private readonly pageSize: number

  constructor() {
    super()
    this.movies = []
    this.currentPage = 1
    this.pageSize = 10 
  }

  readonly getMovies = (): Movie[] => {
    const start = (this.currentPage - 1) * this.pageSize
    const end = start + this.pageSize
    return this.movies.slice(start, end)
  }

  readonly getCurrentPage = (): number => this.currentPage

  readonly getTotalPages = (): number =>
    Math.ceil(this.movies.length / this.pageSize)

  readonly nextPage = (): void => {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++
      this.notifyAllObservers()
    }
  }

  readonly prevPage = (): void => {
    if (this.currentPage > 1) {
      this.currentPage--
      this.notifyAllObservers()
    }
  }

  readonly fetchMovies = async (): Promise<Movie[]> => {
    const response = await fetch('../database/movies-2020s.json')
    const data = await response.json()
    if (!data) {
      throw new Error('No data found')
    }
    return data as Movie[]
  }

  readonly initComponent = async (): Promise<void> => {
    this.movies = await this.fetchMovies()
    this.notifyAllObservers()
  }
}
