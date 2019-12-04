import { Observer } from './Observer';

export class Observable {
    private observers: any[] = [];

    addObserver(observer: Observer) : void {
        this.observers.push(observer);
    }

    emit(arg: any[] | {}) {
        this.observers.forEach( (observer : Observer) => observer.notify(arg));
    }

    getObservers() {
        return this.observers;
    }
}

