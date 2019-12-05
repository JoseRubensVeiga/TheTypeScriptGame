import { Observer } from './Observer';

export class Observable {
    private observers: any[] = [];

    addObserver(observer: Observer) : void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        if(this.observers.indexOf(observer))
            this.observers.splice(this.observers.indexOf(observer), 1);
    }

    emit(arg: any[] | {}) {
        this.observers.forEach( (observer : Observer) => observer.notify(arg));
    }

    getObservers() {
        return this.observers;
    }
}

