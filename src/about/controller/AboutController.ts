import AboutModel from '../model/AboutModel.js'
import AboutView from '../view/AboutView.js'

export default class AboutController {
  constructor(
    private readonly model: AboutModel,
    private readonly view: AboutView
  ) {}

  readonly initComponent = () => {
    this.model.initComponent()
    this.view.render(this.model.info)
  }
}
