const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');

const ruta = "/Users/LABORATORIA/Desktop/DEV003-md-links/README.md";
const rutaRelativa = "./README.md";
const rutaDirectorio = "./";


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

// validar si es un directorio
const pathIsDirectory = (route) => fs.lstatSync(route).isDirectory()
console.log(pathIsDirectory(rutaDirectorio));
console.log(pathIsDirectory(ruta));


//--------------------------------------------------------------
//Leer un directorio y extraer archivos .md
// const getFileMd = (directoryRoute) => {
//    return new Promise((resolve, rejects) => {
//     fs.readdir(directoryRoute, (error, archivos) => {
//        if(archivos) {
//         archivos.forEach(archivo => {
//             resolve(archivo);  
//             console.log(archivo);
//             const mdFile = archivo.filter(archivo =>
//                getExt(archivo) === ".md"); 
//        })
//        resolve(mdFile);
//        console.log(mdFile);
//     }else {
//         rejects(`Error: ${error}`);
//        }
//      });
//     })
// };
//     console.log(getFileMd(rutaDirectorio));
//---------------------------------------------------------------------

//Obtener el formato del archivo
const getExt = (route) => path.extname(route);
console.log(getExt(ruta));
const extPathMd = getExt(ruta);

//validar si es un archivo .md
const pathIsMd = (extRoute) => extRoute === ".md";
console.log(pathIsMd(extPathMd));

//Extraer links de un archivo
const getLinks = (route) => {
    return new Promise((resolve, rejects) =>{
        //leerlo y buscar links y extraer
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

// valida links en array (muestra status), hacer peticiones (axios)
// const validateLinks = (allURL) => {
//retornar una promesa con unn arreglo de objeto para cada link
//si es true href, text, file, status, ok
//si es false href, text, file
//}

module.exports = {
     pathExist,
     pathAbsolut,
     newPathAbsolut,
     getExt,
     pathIsMd,
     pathIsDirectory,
     getLinks
 };