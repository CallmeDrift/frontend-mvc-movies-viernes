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

export default class IndexController {
  private readonly movie: MovieController
  private readonly menu: MenuController
  private readonly about: AboutController
  private readonly home: HomeController
  private readonly notFound: NotFoundController
  private readonly search: any

  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    const mainContainer = this.view.getMainHTML()
    const menuContainer = this.view.getMenuHTML()


    this.movie = MovieFactory.create(mainContainer)
    this.menu = MenuFactory.create(menuContainer)
    this.about = AboutFactory.create(mainContainer)
    this.home = HomeFactory.create(mainContainer)
    this.notFound = new NotFoundController(mainContainer)


    const searchContainer = document.querySelector('.nav-btn-right') as HTMLElement
    this.search = SearchFactory.create(searchContainer)
  }

  readonly initComponent = (): void => {
    this.model.initComponent()
    this.view.initComponent()

    this.menu.initComponent()
    this.movie.initComponent()
    this.search.initComponent()


    const searchModel = this.search.getModel()
    const movieModel = (this.movie as any).model as import('../../movie/model/MovieModel.js').default

    searchModel.attach({
      update: () => {
        const query = searchModel.getQuery()
        movieModel.filterMovies(query)
      }
    })

    const normalizeLink = (raw: string | undefined): string => {
      if (!raw) return '#/home'

      let s = raw.startsWith('#') ? raw.slice(1) : raw 
      if (!s.startsWith('/')) s = '/' + s     
      return '#' + s
    }


    const menuItems = this.menu['model'].getMenu()
    menuItems.forEach((item) => {
      const route = normalizeLink(item.link)
      item.action = (e?: Event) => {
        if (e && typeof e.preventDefault === 'function') e.preventDefault()
        if (window.location.hash !== route) {
          window.location.hash = route
        } else {
          this.handleRouting()
        }
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

  private readonly handleRouting = (): void => {
    const main = this.view.getMainHTML()
    main.innerHTML = ''

    const hash = this.getNormalizedHash()

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
      default:
        this.notFound.initComponent()
        break
    }
  }

  private readonly renderComponent = (controller: any): void => {
    const main = this.view.getMainHTML()
    main.innerHTML = ''
    controller.initComponent()
  }
}
