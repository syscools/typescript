
export class AppComponent {
    constructor() {
        console.log("AppComponent constructor");
    }

    add(a:number,b:number): number {
        return a + b;
    }
}
