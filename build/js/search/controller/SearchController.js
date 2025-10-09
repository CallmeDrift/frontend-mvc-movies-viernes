import SearchModel from '../model/SearchModel.js';
import SearchView from '../view/SearchView.js';
import Observer from '../../shared/Observer/Observer.js';
export default class SearchController {
    model;
    view;
    constructor(container, movieModel) {
        this.model = new SearchModel();
        this.view = new SearchView(this.model, container);
        if (movieModel) {
            new Observer(this.model, () => {
                const q = this.model.getQuery();
                movieModel.filterMovies(q);
            });
        }
    }
    initComponent = () => {
        const form = document.querySelector('#search');
        const input = form.querySelector('input');
        console.log(this.view);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = input.value.trim();
            console.log('Buscando:', query);
            this.model.setQuery(query);
        });
    };
    getModel = () => this.model;
}
