import NotFoundModel from '../model/NotFoundModel.js';
import NotFoundView from '../view/NotFoundView.js';
export default class NotFoundController {
    parent;
    model;
    view;
    constructor(parent) {
        this.parent = parent;
        this.model = new NotFoundModel();
        this.view = new NotFoundView(this.parent);
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.render(this.model.info);
    };
}
