import Subject from '../../shared/Observer/Subject.js';
export default class SearchModel extends Subject {
    query;
    constructor() {
        super();
        this.query = '';
    }
    getQuery = () => this.query;
    setQuery = (newQuery) => {
        this.query = newQuery.toLowerCase();
        this.notifyAllObservers();
    };
}
