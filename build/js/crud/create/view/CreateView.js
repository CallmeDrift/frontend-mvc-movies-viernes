import CreateTemplate from "../template/CreateTemplate.js";
export default class CreateView {
    parent;
    constructor(parent) {
        this.parent = parent;
    }
    render = (data) => {
        this.parent.innerHTML = "";
        const template = new CreateTemplate(data);
        this.parent.appendChild(template.getHTML());
    };
}
