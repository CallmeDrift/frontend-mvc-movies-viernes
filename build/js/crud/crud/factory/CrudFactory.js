import CrudController from "../controller/CrudController.js";
import CrudModel from "../model/CrudModel.js";
import CrudView from "../view/CrudView.js";
export default class CrudFactory {
    static create = (parent) => {
        const model = new CrudModel();
        const view = new CrudView(parent);
        return new CrudController(model, view);
    };
}
