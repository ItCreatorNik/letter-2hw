const findRepeatableLetter = require("repeatable-letter");
const fs = require("fs");

const readTextFileAndFindLetter = () => {
   const parameters = process.argv.slice(2);
    fs.readFile(parameters[0],'utf-8', (err,data) => {
        console.log(findRepeatableLetter(data));
    })
}


readTextFileAndFindLetter()