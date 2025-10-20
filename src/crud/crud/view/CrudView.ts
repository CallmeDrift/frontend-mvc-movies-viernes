import CrudTemplate from "../template/CrudTemplate.js"
import CrudElement from "../types/CrudElement.js"

export default class CrudView {
    private readonly template: CrudTemplate

    constructor(private readonly parent: HTMLElement) {
        this.template = new CrudTemplate([])
    }

      readonly initComponent = (menu: CrudElement[]) => {
        this.template.setOptions(menu)
        this.parent.appendChild(this.template.getHTML())
      }
      
      readonly getMainHTML = (): HTMLElement => this.parent
      
    readonly render = () => {
        this.parent.innerHTML = ''
        this.parent.appendChild(this.template.getHTML())
    }
}