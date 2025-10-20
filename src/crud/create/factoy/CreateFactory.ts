import CreateController from "../controller/CreateController.js"
import CreateModel from "../model/CreateModel.js"
import CreateView from "../view/CreateView.js"

export default class CreateFactory {
    static create(parent: HTMLElement): CreateController {
        const model = new CreateModel()
        const view = new CreateView(parent)
        return new CreateController(model, view)
    }
}