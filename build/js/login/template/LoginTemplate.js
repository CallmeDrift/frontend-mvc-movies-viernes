export default class LoginTemplate {
    data;
    constructor(data) {
        this.data = data;
    }
    getHTML = () => {
        const form = document.createElement("form");
        form.id = "forms";
        form.innerHTML = `
        <div class="login-container">
        <div class="form-container">
            <label for="nombre">${this.data.name}</label><br>
            <input type="text" id="nombre" placeholder="Escribe tu nombre"><br>
            <label for="email">${this.data.email}: </label><br>
            <input type="text" id="email" placeholder="Escribe tu email"><br>
            <button type="submit">Poner 5.0</button>
            </div>
        </div>
        `;
        return form;
    };
}
