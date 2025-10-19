import CrudModel from "../model/CrudModel";
import CrudView from "../view/CrudView";

export default class CrudController {
    constructor(
        private readonly model: CrudModel,
        private readonly view: CrudView
    ) {}

    readonly initComponent = () => {
        this.model.initComponent()
        this.view.initComponent(this.model.getOptions())
    }
}