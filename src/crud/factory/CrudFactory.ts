import CrudController from "../controller/CrudController";
import CrudModel from "../model/CrudModel";
import CrudView from "../view/CrudView";

export default class CrudFactory {
    static readonly create = (parent: HTMLElement) => {
        const model = new CrudModel()
        const view = new CrudView(parent)
        return new CrudController(model, view)
    }
}