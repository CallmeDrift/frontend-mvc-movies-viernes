import CreateMovie from "../type/CreateMovie.js";

export default class CreateModel {

    data: CreateMovie

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
        }
    }

    readonly setData = (newData: CreateMovie): void => {
        this.data = newData
    }

    readonly getData = (): CreateMovie => this.data

    readonly initComponent = () => { }
}