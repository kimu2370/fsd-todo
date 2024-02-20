export default class Observer {
  private observers = new Set<() => void>();

  subscribe(observer: () => void) {
    this.observers.add(observer);
  }

  unsubscribe(observer: () => void) {
    this.observers.delete(observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer());
  }
}
