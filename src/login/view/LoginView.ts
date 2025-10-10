import LoginTemplate from "../template/LoginTemplate.js";

export default class LoginView {
    constructor(private readonly parent: HTMLElement) {
    }

    readonly render = (data: {name: string; email: string}) => {
        this.parent.innerHTML = ""
        const template = new LoginTemplate(data)
        this.parent.appendChild(template.getHTML())
    }
}