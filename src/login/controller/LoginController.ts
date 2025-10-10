import LoginModel from "../model/LoginModel.js"
import LoginView from "../view/LoginView.js"

export default class LoginController {

    constructor (
        private readonly model: LoginModel,
        private readonly view: LoginView
    ) {}

    readonly initComponent = () => {
        this.model.initComponent()
        this.view.render(this.model.data)
    }
}