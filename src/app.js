//phil welsby - 7 sept 2021
//app.js

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

const request = process.argv[2];
const {addFilm} = require("./utils")
const {listDb} = require("./utils")
const {deleteMovie} = require("./utils")
const {updateMovie} = require("./utils")
const app = () => {
    if (request === 'add') {
        const filmTitle = process.argv[3];
        const actor = process.argv[4];
        const year = process.argv[5];
        const rating = process.argv[6];
        const newItem = {
            name: filmTitle,
            actor: actor,
            year: year,
            rating: rating
        }
    addFilm(newItem)
    }
    else if (request === 'list') {
        listDb()
    }
    else if (request === "update") {
        const searchTerm = process.argv[3];
        const rating = process.argv[4];
        updateMovie(searchTerm, rating)
    }
    else if (request === "delete") {
        const searchTerm = process.argv[3];
        deleteMovie(searchTerm);
    }
}

app();