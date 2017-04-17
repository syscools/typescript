import { AppComponent } from './app.component';

function main() {
    console.log("** main **");

    let obj = new AppComponent();
    let s = obj.add(3,7);
    console.log("sum = " + s);
}

main();
