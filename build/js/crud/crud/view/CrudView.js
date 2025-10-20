import CrudTemplate from "../template/CrudTemplate.js";
export default class CrudView {
    parent;
    template;
    constructor(parent) {
        this.parent = parent;
        this.template = new CrudTemplate([]);
    }
    initComponent = (menu) => {
        this.template.setOptions(menu);
        this.parent.appendChild(this.template.getHTML());
    };
    getMainHTML = () => this.parent;
    render = () => {
        this.parent.innerHTML = '';
        this.parent.appendChild(this.template.getHTML());
    };
}
