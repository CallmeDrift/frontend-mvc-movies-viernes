import CreateTemplate from "../template/CreateTemplate.js"

export default class CreateView {
    constructor(private readonly parent: HTMLElement) {
    }

    readonly render = (data: {
        price: number
        title: string
        year: number
        score: number
        cast: string
        genres: string
        extract: string
        thumbnail: string
    }) => {
        this.parent.innerHTML = ""
        const template = new CreateTemplate(data)
        this.parent.appendChild(template.getHTML())

    }

}