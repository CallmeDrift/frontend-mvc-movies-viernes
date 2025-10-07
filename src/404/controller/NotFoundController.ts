import NotFoundModel from '../model/NotFoundModel.js'
import NotFoundView from '../view/NotFoundView.js'


export default class NotFoundController {
  private readonly model: NotFoundModel
  private readonly view: NotFoundView

  constructor(private readonly parent: HTMLElement) {
    this.model = new NotFoundModel()
    this.view = new NotFoundView(this.parent)
  }

  readonly initComponent = () => {
    this.model.initComponent()
    this.view.render(this.model.info)
  }
}
