import SearchController from '../controller/SearchController.js';
export default class SearchFactory {
    static create(container, movieModel) {
        return new SearchController(container, movieModel);
    }
}
