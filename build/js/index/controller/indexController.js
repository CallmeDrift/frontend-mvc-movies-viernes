import MenuFactory from '../../menu/factory/MenuFactory.js';
import MovieFactory from '../../movie/factory/MovieFactory.js';
import AboutFactory from '../../about/factory/AboutFactory.js';
import HomeFactory from '../../home/factory/HomeFactory.js';
import SearchFactory from '../../search/factory/SearchFactory.js';
export default class IndexController {
    model;
    view;
    movie;
    menu;
    about;
    home;
    search;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        const mainContainer = this.view.getMainHTML();
        const menuContainer = this.view.getMenuHTML();
        // Crear controladores principales
        this.movie = MovieFactory.create(mainContainer);
        this.menu = MenuFactory.create(menuContainer);
        this.about = AboutFactory.create(mainContainer);
        this.home = HomeFactory.create(mainContainer);
        // Crear el controlador de búsqueda usando el contenedor existente del nav
        const searchContainer = document.querySelector('.nav-btn-right');
        this.search = SearchFactory.create(searchContainer);
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
        this.menu.initComponent();
        this.movie.initComponent();
        this.search.initComponent();
        // Conectar búsqueda con el modelo de películas
        const searchModel = this.search.getModel();
        const movieModel = this.movie.model;
        // Cuando cambia el texto en la búsqueda, filtra las películas
        searchModel.attach({
            update: () => {
                const query = searchModel.getQuery();
                console.log('🔍 Filtrando películas con:', query);
                movieModel.filterMovies(query);
            }
        });
        // Configurar acciones del menú
        const menuItems = this.menu['model'].getMenu();
        menuItems.forEach((item) => {
            if (item.label === 'Home' || item.label === 'Rentals') {
                item.action = () => {
                    const main = this.view.getMainHTML();
                    main.innerHTML = '';
                    this.movie.initComponent();
                };
            }
            if (item.label === 'About') {
                item.action = () => {
                    const main = this.view.getMainHTML();
                    main.innerHTML = '';
                    this.about.initComponent();
                };
            }
            if (item.label === 'Home') {
                item.action = () => {
                    const main = this.view.getMainHTML();
                    main.innerHTML = '';
                    this.home.initComponent();
                };
            }
        });
        this.menu['view'].render();
    };
}
