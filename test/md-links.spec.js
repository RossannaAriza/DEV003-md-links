const { mdLinks } = require('../index.js');
const { pathExist } = require('../api.js');
const { pathAbsolut } = require('../api.js');
const { newPathAbsolut } = require('../api.js');
const { getExt } = require('../api.js');
const { pathIsDirectory } = require('../api.js');
const { pathIsMd } = require('../api.js');




describe('mdLinks', () => {

  it('should return a function', () => {
    expect(typeof mdLinks).toEqual("function");
  });
  it('should return error when the path doesnt exit', () => {
    return mdLinks('/rossanna/routedoesntexist.md').catch((error) => {
      expect(error).toEqual('The route doesn´t exist');
    });
  });
});

describe('pathExist', () => {

  it('should return a function', () => {
    expect(typeof pathExist).toEqual("function");
  });
  it('should return true if the path exists', () => {
    expect(pathExist("./README.md") ).toEqual(true);
  });
  
});

describe('pathAbsolut', () => {

  it('should return a function', () => {
    expect(typeof pathAbsolut).toEqual("function");
  });
  it('should return true if the path is absolut', () => {
    expect(pathAbsolut("/Users/LABORATORIA/Desktop/DEV003-md-links/README.md") ).toEqual(true);
  });
  it('should return false if the path doesnt absolut', () => {
    expect(pathAbsolut("./README.md") ).toEqual(false);
  });
  
});

describe('newPathAbsolut', () => {

  it('should return a function', () => {
    expect(typeof newPathAbsolut).toEqual("function");
  });
  it('should return a relative path like absolut path', () => {
    expect(newPathAbsolut("./README.md") ).toEqual("C:\\Users\\LABORATORIA\\Desktop\\DEV003-md-links\\README.md");
  });
  
});

describe('getExt', () => {

  it('should return a function', () => {
    expect(typeof getExt).toEqual("function");
  });
  it('should return the file format, in this case .md', () => {
    expect(getExt("/Users/LABORATORIA/Desktop/DEV003-md-links/README.md") ).toEqual(".md");
  });
  it('should return the file format, in this case .js', () => {
    expect(getExt("./cli.js") ).toEqual(".js");
  });
  
});

describe('pathIsDirectory', () => {

  it('should return a function', () => {
    expect(typeof pathIsDirectory).toEqual("function");
  });
  it('should return true if the path is a directory', () => {
    expect(pathIsDirectory("./.") ).toEqual(true);
  });
  it('should return false if the path dosnt a directory', () => {
    expect(pathIsDirectory("README.md") ).toEqual(false);
  });
  
});

describe('pathIsMd', () => {

  it('should return a function', () => {
    expect(typeof pathIsMd).toEqual("function");
  });
  it('should return false if the path doesnt .md', () => {
    expect(pathIsMd(".js") ).toEqual(false);
  });
  it('should return true if the path is .md', () => {
    expect(pathIsMd(".md") ).toEqual(true);
  });
  
});

// describe('getLinks', () => {

//   it('should return a function', () => {
//     expect(typeof getLinks).resolve.toBe("function");
//   });

  
// });