export default class NotFoundView {
    parent;
    constructor(parent) {
        this.parent = parent;
    }
    render = (info) => {
        this.parent.innerHTML = `
      <div class="not-found">
        <h1>${info.title}</h1>
        <p>${info.message}</p>
      </div>
    `;
    };
}
