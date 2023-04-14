const { mdLinks } = require('../index.js');


describe('mdLinks', () => {
    it('should return error when the path doesnt exit', () => {
      return mdLinks('/rossanna/routedoesntexist.md').catch((error) => {
        expect(error).toEqual('The path doesn´t exist');
      });
    });

    it('should return error when the files doesnt .md', () => {
        return mdLinks('/Users/LABORATORIA/Desktop/DEV003-md-links/index.js').catch((error) => {
          expect(error).toEqual("The files doesnt .md");
        });
      });
  });