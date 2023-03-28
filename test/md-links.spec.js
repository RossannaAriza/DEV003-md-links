const { mdLinks } = require('../index.js');
const { pathExist } = require('../FS.js');
const { pathAbsolut } = require('../FS.js');
const { getExt } = require('../FS.js');


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
