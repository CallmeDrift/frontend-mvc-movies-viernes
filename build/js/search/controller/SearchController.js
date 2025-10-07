import SearchModel from '../model/SearchModel.js';
import SearchView from '../view/SearchView.js';
export default class SearchController {
    model;
    view;
    constructor(container, movieModel) {
        this.model = new SearchModel();
        this.view = new SearchView(this.model, container);
        if (movieModel) {
            this.model.attach({
                update: () => {
                    const q = this.model.getQuery();
                    movieModel.filterMovies(q);
                },
            });
        }
    }
    initComponent = () => {
        const form = document.querySelector('#search');
        const input = form.querySelector('input');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = input.value.trim();
            console.log('Buscando:', query);
            this.model.setQuery(query);
        });
    };
    getModel = () => this.model;
}
