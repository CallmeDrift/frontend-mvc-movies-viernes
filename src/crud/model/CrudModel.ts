import CrudElement from "../types/CrudElement";

export default class CrudModel {
    private readonly options: CrudElement[]

    constructor() {
        this.options = [
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