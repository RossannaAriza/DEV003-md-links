const fs = require('fs');
const path = require('path');

const ruta = "/Users/LABORATORIA/Desktop/DEV003-md-links/README.md";
const rutaRelativa = "./README.md";

//cambiar nombre del parametro!
const pathExist = (route) => fs.existsSync(route);
console.log(pathExist(ruta));

const pathAbsolut = (route) => path.isAbsolute(route);
console.log(pathAbsolut(ruta));
console.log(pathAbsolut(rutaRelativa));

const newPathAbsolut = (route) => path.resolve(route);
console.log(newPathAbsolut(rutaRelativa));

// const pathDirectory = (URL) => fs.statSync(URL);
// console.log(pathDirectory());
// console.log(pathDirectory(ruta));

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

const getExt = (route) => path.extname(route);
console.log(getExt(ruta));

module.exports = {
     pathExist,
     pathAbsolut,
     newPathAbsolut,
     getExt
 };