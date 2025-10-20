import MenuController from '../../menu/controller/MenuController.js'
import MenuFactory from '../../menu/factory/MenuFactory.js'
import MovieController from '../../movie/controller/MovieController.js'
import MovieFactory from '../../movie/factory/MovieFactory.js'
import AboutController from '../../about/controller/AboutController.js'
import AboutFactory from '../../about/factory/AboutFactory.js'
import HomeFactory from '../../home/factory/HomeFactory.js'
import HomeController from '../../home/controller/HomeController.js'
import NotFoundController from '../../404/controller/NotFoundController.js'

import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'
import SearchFactory from '../../search/factory/SearchFactory.js'
import SearchController from '../../search/controller/SearchController.js'
import SearchModel from '../../search/model/SearchModel.js'
import MovieModel from '../../movie/model/MovieModel.js'
import MenuModel from '../../menu/model/MenuModel.js'
import Observer from '../../shared/Observer/Observer.js'
import LoginController from '../../login/controller/LoginController.js'
import LoginFactory from '../../login/factory/LoginFactory.js'
import CrudController from '../../crud/crud/controller/CrudController.js'
import CrudFactory from '../../crud/crud/factory/CrudFactory.js'
import CreateController from '../../crud/create/controller/CreateController.js'
import CreateFactory from '../../crud/create/factoy/CreateFactory.js'

// Tipo genérico para cualquier controlador con initComponent()
interface BaseController {
  initComponent(): void
}

export default class IndexController {
  private readonly movie: MovieController
  private readonly menu: MenuController
  private readonly about: AboutController
  private readonly home: HomeController
  private readonly login: LoginController
  private readonly notFound: NotFoundController
  private readonly search: SearchController
  private readonly crud: CrudController
  private readonly create: CreateController

  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    const mainContainer = this.view.getMainHTML()
    const menuContainer = this.view.getMenuHTML()

    // controladores
    this.movie = MovieFactory.create(mainContainer)
    this.menu = MenuFactory.create(menuContainer)
    this.about = AboutFactory.create(mainContainer)
    this.home = HomeFactory.create(mainContainer)
    this.notFound = new NotFoundController(mainContainer)
    this.login = LoginFactory.create(mainContainer)
    this.crud = CrudFactory.create(mainContainer)
    this.create = CreateFactory.create(mainContainer)

    // Controlador de búsqueda
    const searchContainer = document.querySelector('.nav-btn-right') as HTMLElement
    this.search = SearchFactory.create(searchContainer)
  }

  readonly initComponent = (): void => {
    this.model.initComponent()
    this.view.initComponent()
    this.menu.initComponent()
    this.movie.initComponent()
    this.search.initComponent()
    this.login.initComponent()
    this.crud.initComponent()
    this.create.initComponent()

    const searchModel: SearchModel = this.search.getModel()
    const movieModel: MovieModel = this.movie['model']

    new Observer<SearchModel>(searchModel, (): void => {
      const query = searchModel.getQuery()
      movieModel.filterMovies(query)
    })

    const normalizeLink = (raw: string | undefined): string => {
      if (!raw) return '#/home'
      let s = raw.startsWith('#') ? raw.slice(1) : raw
      if (!s.startsWith('/')) s = '/' + s
      return '#' + s
    }

    // acciones del menú
    const menuModel: MenuModel = this.menu['model']
    const menuItems = menuModel.getMenu()

    menuItems.forEach((item) => {
      const route = normalizeLink(item.link)
      item.action = (e?: Event): void => {
        e?.preventDefault()
        if (window.location.hash !== route) {
          window.location.hash = route
        } else {
          this.handleRouting()
        }
        // Actualiza el estado activo al hacer clic
        this.updateActiveMenu(route)
      }
    })

    this.menu['view'].render()

    window.addEventListener('hashchange', this.handleRouting)
    this.handleRouting()
  }

  private readonly getNormalizedHash = (): string => {
    const h = window.location.hash || '#/home'
    if (!h.startsWith('#')) return '#/home'
    let noHash = h.slice(1)
    if (!noHash.startsWith('/')) noHash = '/' + noHash
    return '#' + noHash
  }

  private readonly updateActiveMenu = (currentHash: string): void => {
    const menuModel: MenuModel = this.menu['model']
    const menuItems = menuModel.getMenu()

    menuItems.forEach(item => {
      // Activa solo el ítem correspondiente
      item.active = item.link === currentHash.replace('#/', '#')
    })

    // Vuelve a renderizar el menú para aplicar la clase activa
    this.menu['view'].render()
  }

  private readonly handleRouting = (): void => {
    const main = this.view.getMainHTML()
    main.innerHTML = ''

    const hash = this.getNormalizedHash()

    // Actualiza el estado activo según la ruta actual
    this.updateActiveMenu(hash)

    switch (hash) {
      case '#/':
      case '#/home':
        this.renderComponent(this.home)
        break
      case '#/movies':
      case '#/rentals':
        this.renderComponent(this.movie)
        break
      case '#/about':
        this.renderComponent(this.about)
        break
      case '#/login':
        this.renderComponent(this.login)
        break
      case '#/crud':
        this.renderComponent(this.crud)
        break
      default:
        this.notFound.initComponent()
        break
    }
  }

  private readonly renderComponent = (controller: BaseController): void => {
    const main = this.view.getMainHTML()
    main.innerHTML = ''
    controller.initComponent()
  }
}
