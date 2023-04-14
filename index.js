const { pathExist, pathAbsolut, newPathAbsolut, validateLinks, getExt, pathIsMd, readFile, getLinks, pathIsDirectory } = require('./api.js');

//Create an mdLinks function, it receives two parameters, the first is a "URL", and the second option can be "--stats, --validate or --stats --validate", the last being a boolean value.
const mdLinks = (path, options) => {
  //return new promise
  return new Promise((resolve, reject) => {
    // identificar si la ruta exite
    if (pathExist(path) === true) {
      //validar si es una ruta es absoluta sino convertirla
      let pathAbsolute = "";
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
        readFile(pathAbsolute).then((data) =>{
          if (options.validate) {
            validateLinks(getLinks(data, pathAbsolute)).then((url) => resolve(url));
          } else {
            resolve(getLinks(data, pathAbsolute));
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

//mdLinks("/Users/LABORATORIA/Desktop/DEV003-md-links/README.md", {validate: true}).then((urlData) => console.log(urlData)).catch((error) => console.log(error));
//mdLinks("/Users/LABORATORIA/Desktop/DEV003-md-links/README.md", {validate: false}).then((urlData) => console.log(urlData)).catch((error) => console.log(error));
// mdLinks("/Users/LABORATORIA/Desktop/DEV003-md-links/hola.md").catch((error) => console.log(error));
// mdLinks("/Users/LABORATORIA/Desktop/DEV003-md-links/index.js").catch((error) => console.log(error));


module.exports = {
  mdLinks
};