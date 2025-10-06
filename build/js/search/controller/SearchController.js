import SearchModel from '../model/SearchModel.js';
import SearchView from '../view/SearchView.js';
export default class SearchController {
    model;
    view;
    constructor(container, movieModel) {
        this.model = new SearchModel();
        this.view = new SearchView(this.model, container);
        // Si nos pasan el MovieModel, conectamos el filtrado directamente
        if (movieModel) {
            // usamos attach con un objeto - casteamos a any para evitar problemas de tipos con Observer abstracto
            this.model.attach({
                update: () => {
                    const q = this.model.getQuery();
                    movieModel.filterMovies(q);
                },
            });
        }
    }
    initComponent = () => {
        // ya está renderizado en el constructor; si quieres lógica extra, aquí
    };
    getModel = () => this.model;
}
