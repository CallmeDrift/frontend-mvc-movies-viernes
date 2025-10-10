import MenuFactory from '../../menu/factory/MenuFactory.js';
import MovieFactory from '../../movie/factory/MovieFactory.js';
import AboutFactory from '../../about/factory/AboutFactory.js';
import HomeFactory from '../../home/factory/HomeFactory.js';
import NotFoundController from '../../404/controller/NotFoundController.js';
import SearchFactory from '../../search/factory/SearchFactory.js';
import Observer from '../../shared/Observer/Observer.js';
import LoginFactory from '../../login/factory/LoginFactory.js';
export default class IndexController {
    model;
    view;
    movie;
    menu;
    about;
    home;
    login;
    notFound;
    search;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        const mainContainer = this.view.getMainHTML();
        const menuContainer = this.view.getMenuHTML();
        // controladores
        this.movie = MovieFactory.create(mainContainer);
        this.menu = MenuFactory.create(menuContainer);
        this.about = AboutFactory.create(mainContainer);
        this.home = HomeFactory.create(mainContainer);
        this.notFound = new NotFoundController(mainContainer);
        this.login = LoginFactory.create(mainContainer);
        // Controlador de búsqueda (no tocarlo pq con un comentario se estalla todo :3)
        const searchContainer = document.querySelector('.nav-btn-right');
        this.search = SearchFactory.create(searchContainer);
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
        this.menu.initComponent();
        this.movie.initComponent();
        this.search.initComponent();
        this.login.initComponent();
        const searchModel = this.search.getModel();
        const movieModel = this.movie['model'];
        new Observer(searchModel, () => {
            const query = searchModel.getQuery();
            movieModel.filterMovies(query);
        });
        const normalizeLink = (raw) => {
            if (!raw)
                return '#/home';
            let s = raw.startsWith('#') ? raw.slice(1) : raw;
            if (!s.startsWith('/'))
                s = '/' + s;
            return '#' + s;
        };
        // acciones del menú
        const menuModel = this.menu['model'];
        const menuItems = menuModel.getMenu();
        menuItems.forEach((item) => {
            const route = normalizeLink(item.link);
            item.action = (e) => {
                e?.preventDefault();
                if (window.location.hash !== route) {
                    window.location.hash = route;
                }
                else {
                    this.handleRouting();
                }
            };
        });
        this.menu['view'].render();
        window.addEventListener('hashchange', this.handleRouting);
        this.handleRouting();
    };
    getNormalizedHash = () => {
        const h = window.location.hash || '#/home';
        if (!h.startsWith('#'))
            return '#/home';
        let noHash = h.slice(1);
        if (!noHash.startsWith('/'))
            noHash = '/' + noHash;
        return '#' + noHash;
    };
    handleRouting = () => {
        const main = this.view.getMainHTML();
        main.innerHTML = '';
        const hash = this.getNormalizedHash();
        switch (hash) {
            case '#/':
            case '#/home':
                this.renderComponent(this.home);
                break;
            case '#/movies':
            case '#/rentals':
                this.renderComponent(this.movie);
                break;
            case '#/about':
                this.renderComponent(this.about);
                break;
            case "#/login":
                this.renderComponent(this.login);
                break;
            default:
                this.notFound.initComponent();
                break;
        }
    };
    renderComponent = (controller) => {
        const main = this.view.getMainHTML();
        main.innerHTML = '';
        controller.initComponent();
    };
}
