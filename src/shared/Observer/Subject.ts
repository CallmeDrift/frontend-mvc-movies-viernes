import Observer from './Observer.js'

export default class Subject<T> {
  private readonly observers: Observer<T>[] = []

  readonly attach = (observer: Observer<T>): void => {
    this.observers.push(observer)
  }

  readonly detach = (observer: Observer<T>): void => {
    const index = this.observers.indexOf(observer)
    if (index >= 0) this.observers.splice(index, 1)
  }

  readonly notifyAllObservers = (): void => {
    this.observers.forEach((observer) => observer.update())
  }
}
