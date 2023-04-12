const { pathExist, pathAbsolut, newPathAbsolut, validateLinks, getExt, pathIsMd, getLinks, pathIsDirectory } = require('./api.js');

const ruta = "/Users/LABORATORIA/Desktop/DEV003-md-links/README.md";
const rutaRelativa = "./README.md";
const rutaDirectorio = "./";


//Create an mdLinks function, it receives two parameters, the first is a "URL", and the second option can be "--stats, --validate or --stats --validate", the last being a boolean value.
const mdLinks = (path, options) => {
  //return new promise
  return new Promise((resolve, reject) => {
    // identificar si la ruta exite
    if (pathExist(path) === true) {
      //validar si es una ruta es absoluta sino convertirla
      const pathAbsolute = "";
      //console.log( `The path ${path} exist` );
      if (pathAbsolut(path) === true) {
        pathAbsolute = path;
        // console.log( `The path ${path} is absolute` );
      } else {
        pathAbsolute = newPathAbsolut(path);
        // console.log( `This is your path ${path} absolute: ${pathAbsolut}` );
      }
      //tomar base de que es un archivo
      //Validar si el archivo es .md 
      if (pathIsMd(getExt(pathAbsolute)) === true) {
        //console.log( `The path ${path} is .md`);
        getLinks(pathAbsolute).then((url) => {
          if (!options.validate) {
            resolve(url);
          } else {
            const answer = validateLinks(url);
            resolve(answer);
          }
        })
      } else {
        reject("The files doesnt .md");
      }
  } else {
    //si no existe path error
    reject('The path doesn´t exist');
  }
  });
}

mdLinks(ruta, {validate: true}).then((urlData) => (urlData))
  .catch((error) => console.log(error));

module.exports = {
  mdLinks
};