const { pathExist, pathAbsolut, newPathAbsolut, readFile, getExt, pathIsDirectory, pathIsMd, validateLinks } = require('../api.js');

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

describe('readFile', () => {

  it('should return a function', () => {
    expect(typeof readFile).toEqual("function");
  });
  it('should return all information of the file', async () => {
    const pathTest = await readFile("testFile\\ReadFileFunction\\readFileMD.md");
    expect(pathTest).toEqual("it's just a test");
  });  
});

// describe('getLinks', () => {

//   it('should return an array with links inside of the .md file', () => {
//     return readFile("testFile\\linksTestGetLinks.md").then((url) => {
//       expect(getLinks(url, "testFile\\linksTestGetLinks.md")).toEqual([
//         {
//           text: 'Markdown',
//           href: 'https://es.wikipedia.org/wiki/Markdown',
//           file: '\\Users\\LABORATORIA\\Desktop\\DEV003-md-links\\testFile\\linksTestGetLinks.md'
//         }
//       ]);
//   });
//     })
// });

