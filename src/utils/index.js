//phil welsby - 7 sept 2021
//index.js

const fs = require("fs");

const readFile = () => {
    try {
        console.log("try in readFile")
        return JSON.parse(fs.readFileSync("./src/db/storage.json"));
    } catch (error) {
        return [];
    }
}

readFile()


