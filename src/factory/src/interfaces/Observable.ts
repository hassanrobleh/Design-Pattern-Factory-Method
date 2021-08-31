
interface Observable {

    subscriber(o: Observer): void;
    unsubscriber(o: Observer): void;
    notifyObservers(): void;
}