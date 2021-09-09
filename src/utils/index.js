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
        console.log("File Read")
        return JSON.parse(fs.readFileSync("./src/db/storage.json"));
    } catch (error) {
        return [];
    }
}

//function to save file
const saveFile = (listArr) => {
    fs.writeFileSync("./src/db/storage.json", JSON.stringify(listArr));
}
// function to write data to storage.json file
const writeData = (newArr) => {
    fs.writeFileSync('./src/db/storage.json', JSON.stringify(newArr))
}
//function which takes newItem, object created in app.js and assigns it to the parameter filmObject
exports.addFilm = (filmObject) => {
    const list = readFile();
    list.push(filmObject);
    writeData(list);
}
//function which itterates through the array in storage.json
exports.listDb = (item) => {
  console.log('Current Db contents...')
  const list = JSON.parse(fs.readFileSync("./src/db/storage.json"));
  for (let i = 0; i < list.length; i++) {
    console.log(list[i])
  }
}

exports.deleteMovie = (filter) => {
    const list = readFile();
    let deleteIndex;
    list.map((item, index) => {
        if (item.name === filter) {
            deleteIndex = index;
        }
        return null;
    });
    if (deleteIndex > -1){
        list.splice(deleteIndex, 1);
        saveFile(list);
    } else {
        console.log("Movie not found!")
    }
}


//listDb()
//deleteFilm();