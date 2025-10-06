import Observer from '../../shared/Observer/Observer.js';
export default class SearchView extends Observer {
    input;
    container;
    constructor(subject, container) {
        super(subject);
        this.container = container;
        // Crear el input de búsqueda
        this.input = document.createElement('input');
        this.input.type = 'text';
        this.input.placeholder = 'Buscar por título, año, género o sinopsis...';
        this.input.classList.add('search-bar');
        // Escuchar cambios
        this.input.addEventListener('input', (event) => this.handleSearch(event));
        this.container.appendChild(this.input);
    }
    handleSearch = (event) => {
        const target = event.target;
        const searchModel = this.subject;
        searchModel.setQuery(target.value);
    };
    update = () => {
        const searchModel = this.subject;
        console.log('🔍 Query actualizada:', searchModel.getQuery());
    };
}
