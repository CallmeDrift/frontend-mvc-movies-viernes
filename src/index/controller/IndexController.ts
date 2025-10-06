import MenuController from '../../menu/controller/MenuController.js'
import MenuFactory from '../../menu/factory/MenuFactory.js'
import MovieController from '../../movie/controller/MovieController.js'
import MovieFactory from '../../movie/factory/MovieFactory.js'
import AboutController from '../../about/controller/AboutController.js'
import AboutFactory from '../../about/factory/AboutFactory.js'
import HomeFactory from '../../home/factory/HomeFactory.js'
import HomeController from '../../home/controller/HomeController.js'

import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'
import SearchFactory from '../../search/factory/SearchFactory.js'

export default class IndexController {
  private readonly movie: MovieController
  private readonly menu: MenuController
  private readonly about: AboutController
  private readonly home: HomeController
  private search: any 

  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    const mainContainer = this.view.getMainHTML()
    const menuContainer = this.view.getMenuHTML()

    // Crear controladores principales
    this.movie = MovieFactory.create(mainContainer)
    this.menu = MenuFactory.create(menuContainer)
    this.about = AboutFactory.create(mainContainer)
    this.home = HomeFactory.create(mainContainer)
  }

  readonly initComponent = (): void => {
    this.model.initComponent()
    this.view.initComponent()


    this.menu.initComponent()
    this.movie.initComponent()


    const menuEl = this.view.getMenuHTML()
    const searchContainer = document.createElement('div')
    searchContainer.classList.add('search-container')


    if (menuEl.parentElement) {
      menuEl.parentElement.insertBefore(searchContainer, menuEl.nextSibling)
    } else {
      document.body.insertBefore(searchContainer, this.view.getMainHTML())
    }


    const movieModel = (this.movie as any).model as import('../../movie/model/MovieModel.js').default
    this.search = SearchFactory.create(searchContainer, movieModel)
    this.search.initComponent()

 
    const menuItems = this.menu['model'].getMenu()

    menuItems.forEach((item) => {
      if (item.label === 'Home' || item.label === 'Rentals') {
        item.action = () => {
          const main = this.view.getMainHTML()
          main.innerHTML = ''
          this.movie.initComponent()
        }
      }

      if (item.label === 'About') {
        item.action = () => {
          const main = this.view.getMainHTML()
          main.innerHTML = ''
          this.about.initComponent()
        }
      }

      if (item.label === 'Home') {
        item.action = () => {
          const main = this.view.getMainHTML()
          main.innerHTML = ''
          this.home.initComponent()
        }
      }
    })

    // Render final del menú
    this.menu['view'].render()
  }
}
