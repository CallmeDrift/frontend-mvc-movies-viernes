export default class IndexView {
    body;
    main;
    menu;
    constructor() {
        this.body = document.body;
        this.main = this.body.querySelector('main');
        this.menu = this.body.querySelector('menu');
    }
    getMainHTML = () => this.main;
    getMenuHTML = () => this.menu;
    initComponent = () => { };
}
