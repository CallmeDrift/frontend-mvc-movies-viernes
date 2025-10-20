export default class CreateModel {
    data;
    constructor() {
        this.data = {
            price: 0,
            title: "",
            year: 0,
            score: 0,
            cast: "",
            genres: "",
            extract: "",
            thumbnail: ""
        };
    }
    setData = (newData) => {
        this.data = newData;
    };
    getData = () => this.data;
    initComponent = () => { };
}
