import Subject from './Subject.js'

export default class Observer<T> {
  protected subject: Subject<T>
  private readonly onUpdate: (() => void) | null

  constructor(subject: Subject<T>, onUpdate?: () => void) {
    this.subject = subject
    this.onUpdate = onUpdate ?? null
    this.subject.attach(this)
  }

  readonly update = (): void => {
    if (this.onUpdate) {
      this.onUpdate()
    }
  }
}
