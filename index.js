const { pathExist } = require('./FS.js');
const { pathAbsolut } = require('./FS.js');
const { newPathAbsolut } = require('./FS.js');



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
        //pathAbsolute = newPathAbsolut(path);
      }
      // resolve(pathAbsolute);
      //La ruta es un directorio o archivo
      //si es directorio validar si existen archivos .md devolver un arreglo con los datos
      //si es directorio validar si no existen archivos .md devolver un arreglo vacio y cancelar promesa
      //si el archivo es .md un arreglo
    }else {
      //si no existe error
      reject('The route doesn´t exist');
    }
  });
}


module.exports = {
mdLinks
};