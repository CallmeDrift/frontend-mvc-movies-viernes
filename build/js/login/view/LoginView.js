import LoginTemplate from "../template/LoginTemplate.js";
export default class LoginView {
    parent;
    constructor(parent) {
        this.parent = parent;
    }
    render = (data) => {
        this.parent.innerHTML = "";
        const template = new LoginTemplate(data);
        this.parent.appendChild(template.getHTML());
    };
}
