import SearchController from '../controller/SearchController.js'
import MovieModel from '../../movie/model/MovieModel.js'

export default class SearchFactory {
    static create(container: HTMLElement, movieModel?: MovieModel) {
        return new SearchController(container, movieModel)
    }
}
