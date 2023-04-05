const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');

const ruta = "/Users/LABORATORIA/Desktop/DEV003-md-links/README.md";
const rutaRelativa = "./README.md";

//validar si el path existe
const pathExist = (route) => fs.existsSync(route);
console.log(pathExist(ruta));

//validar si el path es absoluta
const pathAbsolut = (route) => path.isAbsolute(route);
console.log(pathAbsolut(ruta));
console.log(pathAbsolut(rutaRelativa));

//Convertir en ruta absoluta si una ruta es relativa
const newPathAbsolut = (route) => path.resolve(route);
console.log(newPathAbsolut(rutaRelativa));

//validar si el path es un archivo
const pathIsFile = (route) => fs.statSync(route).isFile();
console.log(pathIsFile(ruta));

//validar si es un directorio
// const pathDirectory = (URL) => fs.statSync(URL);
// fs.readdir("./", (error, archivos) => {
//     archivos.forEach(archivo => {
//         console.log(archivo);
//     });
// });

//Obtener el formato del archivo
const getExt = (route) => path.extname(route);
console.log(getExt(ruta));

//validar si es un archivo .md
const pathIsMd = (route) => path.extname(route) === ".md";
console.log(pathIsMd(ruta));

//Extraer links de un archivo
const getLinks = (route) => {
    return new Promise((resolve, rejects) =>{
        //leerlo y buscar links, extraer y hacer peticiones http
        fs.readFile(route, "utf-8", (error, data) => {
            if(data){
                const link = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
                let links = [];
                let matchedLink
                while ((matchedLink = link.exec(data)) !== null){
                    const text = matchedLink[1];
                    const href = matchedLink[2];
                    const file = route;
                    links.push({text, href, file});
                }
                resolve(links);
                console.log(links);
            }else {
                rejects(`Error: ${error}`);
                console.log(`Error: ${error}`);
            }
        })  
    })
}
console.log(getLinks(ruta));



module.exports = {
     pathExist,
     pathAbsolut,
     newPathAbsolut,
     getExt,
     pathIsMd,
     getLinks
 };