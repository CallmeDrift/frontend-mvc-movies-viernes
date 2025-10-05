import MenuController from '../../menu/controller/MenuController.js'
import MenuFactory from '../../menu/factory/MenuFactory.js'
import MovieController from '../../movie/controller/MovieController.js'
import MovieFactory from '../../movie/factory/MovieFactory.js'
import AboutController from '../../about/controller/AboutController.js'
import AboutFactory from '../../about/factory/AboutFactory.js'

import IndexModel from '../model/IndexModel.js'
import IndexView from '../view/IndexView.js'

export default class IndexController {
  private readonly movie: MovieController
  private readonly menu: MenuController
  private readonly about: AboutController

  constructor(
    private readonly model: IndexModel,
    private readonly view: IndexView
  ) {
    // Contenedores principales según tu vista
    const mainContainer = this.view.getMainHTML()
    const menuContainer = this.view.getMenuHTML()

    // Instancias usando las fábricas existentes
    this.movie = MovieFactory.create(mainContainer)
    this.menu = MenuFactory.create(menuContainer)
    this.about = AboutFactory.create(mainContainer)
  }

  readonly initComponent = () => {
    // Inicializar base
    this.model.initComponent()
    this.view.initComponent()

    // Renderizar menú y películas por defecto
    this.menu.initComponent()
    this.movie.initComponent()

    // Asignar las acciones del menú (reemplaza los console.log)
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
    })

    // Re-renderizar el menú con las nuevas acciones activas
    this.menu['view'].render()
  }
}
