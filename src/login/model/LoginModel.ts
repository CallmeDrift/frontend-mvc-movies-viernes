import FormData from "../type/FormData.js" 

export default class LoginModel {
     data: FormData

    constructor () {
        this.data = {name: "Nombre", email: "Email"}
    }

    readonly setData = (newData: FormData): void => {
        this.data = newData
    }


    readonly getData = (): FormData => this.data

    readonly initComponent = () => {}
}