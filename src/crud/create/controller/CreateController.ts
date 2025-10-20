import CreateModel from "../model/CreateModel.js";
import CreateView from "../view/CreateView.js";

export default class CreateController {

    constructor (
        private readonly model: CreateModel,
        private readonly view: CreateView
    ) {}

    readonly initComponent = () => {
        this.model.initComponent()
        this.view.render(this.model.data)
    }
}