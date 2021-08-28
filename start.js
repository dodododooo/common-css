var sass = require('node-sass');
var fs = require('fs');
sass.render(
  {
    file: './main.scss',
    outputStyle: 'expanded', // compressed
  },
  function (err, result) {
    if (!err) {
      fs.writeFile('./common-css.css', result.css, function (err) {
        if (!err) {
          //file written on disk
        }
      });
    } else {
      console.log(err)
    }
  }
);
