import { AppComponent } from './app.component';

//var fs = require('fs');

declare var process;

function main() {
    let count = 0;
    console.log("** main **");

    setInterval(function () {
        let obj = new AppComponent();
        let s = obj.add(3,7);
        console.log("[" + count++ + "] sum = " + s);

        if (count == 5) {
            console.log("-- program end --");
            process.exit(0);
        }
    },1000);

    console.log("** exiting **");
}

main();
