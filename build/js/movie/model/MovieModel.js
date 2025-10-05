import Subject from '../../shared/Observer/Subject.js';
export default class MovieModel extends Subject {
    movies;
    currentPage;
    pageSize;
    constructor() {
        super();
        this.movies = [];
        this.currentPage = 1;
        this.pageSize = 10;
    }
    getMovies = () => {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.movies.slice(start, end);
    };
    getCurrentPage = () => this.currentPage;
    getTotalPages = () => Math.ceil(this.movies.length / this.pageSize);
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
        this.notifyAllObservers();
    };
}
