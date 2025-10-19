export default class CrudTemplate {
    options;
    constructor(options) {
        this.options = options;
    }
    setOptions = (options) => {
        this.options = options;
        console.log(this.options);
    };
    getHTML = () => {
        const form = document.createElement("crud");
        form.id = "cruds";
        form.innerHTML = `
<section class="crud-container">
    <div class="crud-header">
        <h2>CRUD de Peliculas</h2>
    </div>
    <div class="create-movie">
        <label for="create">Crear</label><br>
        <button type="submit" id="create">Crear</button>
    </div>
    <div class="update-movie">
        <label for="update">Actualizar</label><br>
        <button type="submit" id="update">Poner 5.0</button>
    </div>
    <div class="delete-movie">
        <label for="delete">Eliminar </label><br>
        <button type="submit" id="delete">Borrar</button>
    </div>
</section>
        `;
        return form;
    };
}
