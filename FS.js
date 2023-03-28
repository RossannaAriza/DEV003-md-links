const fs = require('fs');
const path = require('path');

// fs.readFile("README1.md", "utf-8", (error, data) => {
//     if(data){
//         console.log(data);
//     }else {
//         console.log(`Error: ${error}`);
//     }
// })

// fs.readdir("./", (error, archivos) => {
//     archivos.forEach(archivo => {
//         console.log(archivo);
//     });
// });
const ruta = "/Users/LABORATORIA/Desktop/DEV003-md-links/README.md";
const rutaRelativa = "./README.md";

const pathExist = (URL) => fs.existsSync(URL);
console.log(pathExist(ruta));

const pathAbsolut = (URL) => path.isAbsolute(URL);
console.log(pathAbsolut(ruta));
console.log(pathAbsolut(rutaRelativa));

// const newPathAbsolut = (URL) => path.resolve([URL]);
// console.log(newPathAbsolut(rutaRelativa));

const getExt = (URL) => path.extname(URL);
console.log(getExt(ruta));

module.exports = {
     pathExist,
     pathAbsolut,
     //newPathAbsolut,
     getExt
 };