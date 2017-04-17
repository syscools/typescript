import { AppComponent } from './app.component';
import { NSpire } from './nspire';

function main() {
    console.log("** main **");

    setTimeout(function () {
        let obj = new AppComponent();
        let s = obj.add(3,7);
        console.log("sum = " + s);
    },5000);

    console.log("** exiting **");
}

main();
