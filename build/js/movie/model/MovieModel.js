import Subject from '../../shared/Observer/Subject.js';
export default class MovieModel extends Subject {
    movies;
    currentPage;
    pageSize;
    filteredMovies;
    constructor() {
        super();
        this.movies = [];
        this.currentPage = 1;
        this.filteredMovies = [];
        this.pageSize = 10;
    }
    getMovies = () => {
        const list = this.filteredMovies.length ? this.filteredMovies : this.movies;
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return list.slice(start, end);
    };
    getCurrentPage = () => this.currentPage;
    getTotalPages = () => {
        const list = this.filteredMovies.length ? this.filteredMovies : this.movies;
        return Math.ceil(list.length / this.pageSize);
    };
    nextPage = () => {
        if (this.currentPage < this.getTotalPages()) {
            this.currentPage++;
            this.notifyAllObservers();
        }
    };
    prevPage = () => {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.notifyAllObservers();
        }
    };
    fetchMovies = async () => {
        const response = await fetch('../database/movies-2020s.json');
        const data = await response.json();
        if (!data) {
            throw new Error('No data found');
        }
        return data;
    };
    initComponent = async () => {
        this.movies = await this.fetchMovies();
        this.filteredMovies = [];
        this.notifyAllObservers();
    };
    filterMovies = (query) => {
        if (!query.trim()) {
            this.filteredMovies = [];
        }
        else {
            const q = query.toLowerCase();
            this.filteredMovies = this.movies.filter((movie) => movie.title.toLowerCase().includes(q) ||
                movie.year.toString().includes(q) ||
                movie.genres.some((g) => g.toLowerCase().includes(q)) ||
                movie.extract.toLowerCase().includes(q));
        }
        this.currentPage = 1;
        this.notifyAllObservers();
    };
}
