export default class LoginModel {
    data;
    constructor() {
        this.data = { name: "Nombre", email: "Email" };
    }
    setData = (newData) => {
        this.data = newData;
    };
    getData = () => this.data;
    initComponent = () => { };
}
