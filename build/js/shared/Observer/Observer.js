export default class Observer {
    subject;
    onUpdate;
    constructor(subject, onUpdate) {
        this.subject = subject;
        this.onUpdate = onUpdate ?? null;
        this.subject.attach(this);
    }
    update = () => {
        if (this.onUpdate) {
            this.onUpdate();
        }
    };
}
