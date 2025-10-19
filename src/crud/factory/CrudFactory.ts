import CrudController from "../controller/CrudController.js";
import CrudModel from "../model/CrudModel.js";
import CrudView from "../view/CrudView.js";

export default class CrudFactory {
    static readonly create = (parent: HTMLElement) => {
        const model = new CrudModel()
        const view = new CrudView(parent)
        return new CrudController(model, view)
    }
}