import AboutTemplate from '../template/AboutTemplate.js';
export default class AboutView {
    parent;
    constructor(parent) {
        this.parent = parent;
    }
    render = (info) => {
        this.parent.innerHTML = '';
        const template = new AboutTemplate(info);
        this.parent.appendChild(template.getHTML());
    };
}
