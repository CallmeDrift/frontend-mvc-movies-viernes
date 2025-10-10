export default class SearchView {
    model;
    form;
    input;
    constructor(model, container) {
        this.model = model;
        // Buscar el formulario existente dentro del contenedor
        this.form = container.querySelector('#search');
        this.input = this.form.querySelector('input');
        this.initEvents();
    }
    initEvents = () => {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault(); // ya no se recarga la pagina 
            const query = this.input.value.trim();
            if (!query)
                return;
            this.model.search(query);
        });
    };
}
