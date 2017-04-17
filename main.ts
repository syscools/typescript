import { AppComponent } from './app.component';

declare var require;
var fs = require('fs');

declare var process;

function main() {
    let count = 0;
    console.log("** main **");

    setInterval(function () {
        let obj = new AppComponent();
        let s = obj.add(3,7);
        console.log("[" + count++ + "] sum = " + s);

        if (count == 5) {
            let content = fs.readFileSync("test.js");
            console.log(content.toString());
        }

        if (count == 10) {
            console.log("-- program end --");
            process.exit(0);
        }
    },1000);

    console.log("** exiting **");
}

main();
