import CrudModel from "../model/CrudModel.js";
import CrudView from "../view/CrudView.js";

export default class CrudController {
    constructor(
        private readonly model: CrudModel,
        private readonly view: CrudView
    ) { }

    readonly initComponent = () => {
        this.model.initComponent()
        this.view.initComponent(this.model.getOptions())
    }
}