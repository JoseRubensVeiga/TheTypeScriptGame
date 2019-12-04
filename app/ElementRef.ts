export class ElementRef {
    public element: HTMLElement;

    constructor(elementId: string) {
        this.element = document.getElementById(elementId);
    }
}