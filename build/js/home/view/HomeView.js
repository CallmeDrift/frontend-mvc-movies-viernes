import HomeTemplate from '../template/HomeTemplate.js';
export default class HomeView {
    parent;
    constructor(parent) {
        this.parent = parent;
    }
    render = (data) => {
        this.parent.innerHTML = '';
        const template = new HomeTemplate(data);
        this.parent.appendChild(template.getHTML());
    };
}
