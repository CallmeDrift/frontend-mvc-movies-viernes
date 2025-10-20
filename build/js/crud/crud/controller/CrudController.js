import CreateFactory from "../../create/factoy/CreateFactory.js";
export default class CrudController {
    model;
    view;
    create;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        const mainContainer = this.view.getMainHTML();
        this.create = CreateFactory.create(mainContainer);
    }
    initComponent = () => {
        this.renderCrud();
    };
    renderCrud = () => {
        this.model.initComponent();
        this.view.initComponent(this.model.getOptions());
        this.setupEvents();
    };
    setupEvents = () => {
        const createBtn = document.getElementById("create");
        if (createBtn) {
            createBtn.addEventListener("click", (e) => {
                e.preventDefault();
                this.renderCreate();
            });
        }
    };
    renderCreate = () => {
        const main = this.view.getMainHTML();
        main.innerHTML = "";
        this.create.initComponent();
    };
}
