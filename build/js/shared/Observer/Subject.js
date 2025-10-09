export default class Subject {
    observers = [];
    attach = (observer) => {
        this.observers.push(observer);
    };
    detach = (observer) => {
        const index = this.observers.indexOf(observer);
        if (index >= 0)
            this.observers.splice(index, 1);
    };
    notifyAllObservers = () => {
        this.observers.forEach((observer) => observer.update());
    };
}
