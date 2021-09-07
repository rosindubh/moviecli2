//phil welsby - 7 sept 2021
//index.js

//file structure
//.
//├── LICENSE
//├── package.json
//├── README.md
//└── src
//    ├── app.js
//    ├── db
//    │   └── storage.json
//    └── utils
//        └── index.js

const fs = require("fs");

const readFile = () => {
    try {
        console.log("try in readFile")
        return JSON.parse(fs.readFileSync("./src/db/storage.json"));
    } catch (error) {
        return [];
    }
}

const writeData = (newArr) => {
    fs.writeFileSync('./src/db/storage.json', JSON.stringify(newArr))
}

exports.addFilm = (filmObject) => {
    const list = readFile();
    list.push(filmObject);
    writeData(list);
}



exports.listDb = (item) => {
  console.log('Current Db contents...')
  const list = JSON.parse(fs.readFileSync("./src/db/storage.json"));
  for (let i = 0; i < list.length; i++) {
    console.log(list[i])
  }
}

//listDb()