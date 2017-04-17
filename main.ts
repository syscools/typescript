import { AppComponent } from './app.component';
import { NSpire } from './nspire';

function main() {
    let r = Math.ceil(Math.random() * 10 + 1);
    console.log("** main **" + r);

    if (r < 5) {
        let obj = new NSpire();
    }

    setTimeout(function () {
        let obj = new AppComponent();
        let s = obj.add(3,7);
        console.log("sum = " + s);
    },5000);

    console.log("** exiting **");
}

main();
