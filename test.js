for(var i = 0;i < 5;i++) {
    console.log("counting " + i);
    if (i == 3) {
        f1();
        process.exit(0);
    }
}

function f1() {
    var fs = require('fs');
    var content = fs.readFileSync("test.js");
    console.log(content.toString());
}
