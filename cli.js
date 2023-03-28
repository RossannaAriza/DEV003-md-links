const { mdLinks } = require('./index.js');

mdLinks('/Users/LABORATORIA/Desktop/md-links/README.md').then(()=>{})
.catch((error) => {
    console.log(error)
});