const { pathExist } = require('./api.js');
const { pathAbsolut } = require('./api.js');
const { newPathAbsolut } = require('./api.js');
const { pathIsDirectory } = require('./api.js');
const { pathIsMd } = require('./api.js');
const { getExt } = require('./api.js');
const { getLinks } = require('./api.js');

//Create an mdLinks function, it receives two parameters, the first is a "URL", and the second option can be "--stats, --validate or --stats --validate", the last being a boolean value.
const mdLinks = (path, options) => {
  //return new promise
  return new Promise((resolve, reject) => {
    // identificar si la ruta exite
    if (pathExist(path) === true) {
      //validar si es una ruta es absoluta sino convertirla
      const pathAbsolute = "";
      if(pathAbsolut(path) === true){
        pathAbsolute = path;
      }else{
        pathAbsolute = newPathAbsolut(path);
      }
      //La ruta es un directorio o archivo
      if(pathIsDirectory(pathAbsolute) === true){
        //si es directorio validar si existen archivos .md devolver un arreglo con los datos
        //si es directorio validar si no existen archivos .md devolver un arreglo vacio y cancelar promesa
      
      }else {
        //Validar si el archivo es .md un arreglo
        if(pathIsMd(getExt(pathAbsolute)) === true){
          console.log(getLinks(pathAbsolute));
        }
      }
      
      
    }else {
      //si no existe error
      reject('The route doesn´t exist');
    }
  });
}


module.exports = {
mdLinks
};