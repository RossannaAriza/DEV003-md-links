const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const ruta = "/Users/LABORATORIA/Desktop/DEV003-md-links/README.md";
const rutaRelativa = "./README.md";
const rutaDirectorio = "./";


//validar si el path existe
const pathExist = (route) => fs.existsSync(route);

//validar si el path es absoluta
const pathAbsolut = (route) => path.isAbsolute(route);

//Convertir en ruta absoluta si una ruta es relativa
const newPathAbsolut = (route) => path.resolve(route);

//validar si el path es un archivo
const pathIsFile = (route) => fs.statSync(route).isFile();

// validar si es un directorio
const pathIsDirectory = (route) => fs.lstatSync(route).isDirectory();

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

//validar si es un archivo .md
const pathIsMd = (extRoute) => extRoute === ".md";

//Extraer links de un archivo
const getLinks = (route) => {
    return new Promise((resolve, rejects) =>{
        //leerlo y buscar links y extraer
        fs.readFile(route, "utf-8", (error, data) => {
            if(error){
                rejects(`Error: ${error}`);
            }else {
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
            }
        })  
    })
}
console.log(getLinks(ruta));

// valida links en array (muestra status), hacer peticiones (axios)
const validateLinks = (allURL) => {
//retornar una promesa con unn arreglo de objeto para cada link
return Promise.all(allURL.map((url) => 
    //ejecutar peticion HTTP
    axios.get(url.href).then((response) => {
        // manejar respuesta exitosa
        //si es true href, text, file, status, ok
       return [{
        href: url.href,
        text: url.text,
        file: url.file,
        status: response.status,
        ok: response.statusText,
    }]}).catch((error) => {
        // manejar error
        let errorStatus;
        //si error responsive exite
        if (error.response) {
            errorStatus = error.response.status;
        //si no recibio respuesta    
        }else if (error.request) {
            //error 400 servidor no puede satisfacer un requerimiento
            errorStatus = error.request;
        //    
        }else {
            //error 500 (Internal Server Error)
            errorStatus = error.message;
        }
        return [{
        //si es false href, text, file
        //traer mensage FAIL si presenta error
        href: url.href,
        text: url.text,
        file: url.file,
        status: errorStatus,
        ok: 'FAIL',
        }]

    }))
)
}



module.exports = {
     pathExist,
     pathAbsolut,
     newPathAbsolut,
     getExt,
     pathIsMd,
     pathIsFile,
     pathIsDirectory,
     getLinks,
     validateLinks
 };