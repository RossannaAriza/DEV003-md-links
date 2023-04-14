const { mdLinks } = require('./index.js');
const { uniqueLinks } = require('./functions.js');
const { brokenLinks } = require('./functions.js');

//const path = llamar o obtener dato de console (yargs o procces.argv)
//const validate =
//const stats =
//const options = {validate, stats};


mdLinks(path, options).then(()=>{
})
.catch((error) => {
    console.log(error);
});