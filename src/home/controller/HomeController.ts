import HomeModel from '../model/HomeModel.js'
import HomeView from '../view/HomeView.js'

export default class HomeController {
  constructor(
    private readonly model: HomeModel,
    private readonly view: HomeView
  ) {}

  readonly initComponent = () => {
    this.model.initComponent()
    this.view.render(this.model.data)
  }
}
