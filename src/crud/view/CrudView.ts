import CrudTemplate from "../template/CrudTemplate"
import CrudElement from "../types/CrudElement"

export default class CrudView {
    private readonly template: CrudTemplate

    constructor(private readonly parent: HTMLElement) {
        this.template = new CrudTemplate([])
    }

      readonly initComponent = (menu: CrudElement[]) => {
        this.template.setOptions(menu)
        this.parent.appendChild(this.template.getHTML())
      }
    
    readonly render = () => {
        this.parent.innerHTML = ''
        this.parent.appendChild(this.template.getHTML())
    }
}