import LoginController from "../controller/LoginController.js";
import LoginModel from "../model/LoginModel.js";
import LoginView from "../view/LoginView.js";
export default class LoginFactory {
    static create(parent) {
        const model = new LoginModel();
        const view = new LoginView(parent);
        return new LoginController(model, view);
    }
}
