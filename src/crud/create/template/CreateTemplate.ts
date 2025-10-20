export default class CreateTemplate {

    constructor(
        private readonly data: {
            price: number
            title: string
            year: number
            score: number
            cast: string
            genres: string
            extract: string
            thumbnail: string
        }
    ) { }

    readonly getHTML = (): HTMLElement => {
        console.log(this.data)
        const form = document.createElement("form")
        form.id = "forms"

        form.innerHTML = `
        <div class="login-container">
        <div class="form-container">
            <label for="price">Precio</label><br>
            <input type="text" id="price" placeholder="Escribe el precio"><br>
            <label for="title">Título</label><br>
            <input type="text" id="title" placeholder="Escribe el título"><br>
            <label for="year">Año</label><br>
            <input type="text" id="year" placeholder="Escribe el año"><br>
            <label for="score">Puntuación</label><br>
            <input type="text" id="score" placeholder="Escribe la puntuación"><br>
            <label for="cast">Reparto</label><br>
            <input type="text" id="cast" placeholder="Escribe el reparto"><br>
            <label for="genres">Géneros</label><br>
            <input type="text" id="genres" placeholder="Escribe los géneros"><br>
            <label for="extract">Extracto</label><br>
            <input type="text" id="extract" placeholder="Escribe el extracto"><br>
            <label for="thumbnail">Miniatura</label><br>
            <input type="text" id="thumbnail" placeholder="Escribe la URL de la miniatura"><br>
            <button type="submit">Crear película</button>
            </div>
        </div>
        `
        return form
    }

}