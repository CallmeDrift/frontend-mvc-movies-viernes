export default class CrudModel {
    options;
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
        ];
    }
    getOptions = () => this.options;
    initComponent = () => { };
}
