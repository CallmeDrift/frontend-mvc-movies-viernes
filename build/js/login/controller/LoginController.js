export default class LoginController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.render(this.model.data);
    };
}
