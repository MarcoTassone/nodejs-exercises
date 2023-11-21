const fs = require("fs")

fs.writeFile("./text.txt", "ciao sono un file di testo", (err, data) => {
    if (err) {
        console.error(err);
        return
    }

    console.log("file creato");
})