import { Observable } from "./Observable";

export class KeyboardListener {
    private keyboardObservable = new Observable();

    constructor() {
        const _keyboardObservable = this.keyboardObservable;
        window.addEventListener("keydown", function(e) {
            _keyboardObservable.emit(e.key);
        });
    }

    getObservable() {
        return this.keyboardObservable;
    }
}