import Observer from '../../shared/Observer/Observer.js';
import MovieTemplate from '../template/MovieTemplate.js';
export default class MovieView extends Observer {
    parent;
    movieTemplate;
    constructor(parent, MovieModel) {
        super(MovieModel);
        this.parent = parent;
        this.movieTemplate = new MovieTemplate(this.subject.getMovies());
    }
    update = () => {
        this.render();
    };
    initComponent = () => { };
    render = () => {
        const model = this.subject;
        this.movieTemplate.setMovies(model.getMovies());
        this.parent.innerHTML = '';
        this.parent.innerHTML += this.movieTemplate.getMoviesHTML();
        const pagination = document.createElement('div');
        pagination.classList.add('pagination');
        const prevBtn = document.createElement('button');
        prevBtn.textContent = '←';
        prevBtn.addEventListener('click', () => model.prevPage());
        const pageInfo = document.createElement('span');
        pageInfo.textContent = `${model.getCurrentPage()} / ${model.getTotalPages()}`;
        const nextBtn = document.createElement('button');
        nextBtn.textContent = '→';
        nextBtn.addEventListener('click', () => model.nextPage());
        pagination.append(prevBtn, pageInfo, nextBtn);
        this.parent.appendChild(pagination);
    };
}
