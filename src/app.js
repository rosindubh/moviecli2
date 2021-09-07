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

const app = () => {
    console.log('Hello from app function')
    if (request === 'add') {
        const filmTitle = process.argv[3];
        const actor = process.argv[4];
        const newItem = {
            name: filmTitle,
            actor: actor,
        }
    console.log(newItem.name)
    console.log(newItem.actor)
    addFilm(newItem)
    }
}

app();