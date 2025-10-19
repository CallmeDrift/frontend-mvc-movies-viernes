import CrudElement from "../types/CrudElement.js";

export default class CrudModel {
    private readonly options: CrudElement[]

    constructor() {
        this.options = [
            {
                label: "Crud",
                link: "#crud"
            },
            {
                label: "Create",
                link: "#create"
            },
            {
                label: "Update",
                link: "#update"
            },
            {
                label: "Delete",
                link: "#delete"
            }
        ]
    }

    readonly getOptions = (): CrudElement[] => this.options

    readonly initComponent = () => {}
}