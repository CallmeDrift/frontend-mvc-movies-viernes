import CreateController from "../../create/controller/CreateController.js";
import CreateFactory from "../../create/factoy/CreateFactory.js";
import CrudModel from "../model/CrudModel.js";
import CrudView from "../view/CrudView.js";

export default class CrudController {
  private readonly create: CreateController;

  constructor(
    private readonly model: CrudModel,
    private readonly view: CrudView
  ) {
    const mainContainer = this.view.getMainHTML();
    this.create = CreateFactory.create(mainContainer); 
  }

  readonly initComponent = () => {
    this.renderCrud(); 
  };


  private readonly renderCrud = (): void => {
    this.model.initComponent();
    this.view.initComponent(this.model.getOptions());
    this.setupEvents(); 
  };


  private readonly setupEvents = (): void => {
    const createBtn = document.getElementById("create");
    if (createBtn) {
      createBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.renderCreate(); 
      });
    }
  };

  private readonly renderCreate = (): void => {
    const main = this.view.getMainHTML();
    main.innerHTML = "";
    this.create.initComponent();
  };
}
