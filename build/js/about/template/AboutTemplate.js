export default class AboutTemplate {
    info;
    constructor(info) {
        this.info = info;
    }
    getHTML = () => {
        const div = document.createElement('div');
        div.classList.add('about-container');
        div.innerHTML = `
      <h2>About Me</h2>
      <div class="about-content">
        <img src="${this.info.image}" alt="${this.info.name}" class="about-image" 
             onerror="this.onerror=null;this.src='./asset/img/not-icon.png';">
        <div class="about-info">
          <p><strong>${this.info.name}</strong> — ${this.info.role}</p>
          <p><strong>ID:</strong> ${this.info.id}</p>
          <p>${this.info.description}</p>
          <p><a href="mailto:${this.info.email}">${this.info.email}</a></p>
        </div>
      </div>
    `;
        return div;
    };
}
