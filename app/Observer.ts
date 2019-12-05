export class Observer {
    notifyFn: Function;

    constructor(notifyFn: Function) {
        this.notifyFn = notifyFn;
    }
    
    notify(data: any[] | {}) {
        this.notifyFn(data);
    }

}
