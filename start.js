const sass = require('node-sass');
const fs = require('fs');
const dist_file = process.env.NODE_ENV == 'production' ? 'common-css.css' : 'common-css-dev.css';
const outputStyle = process.env.NODE_ENV == 'production' ? 'compressed' : 'expanded';
sass.render(
  {
    file: './main.scss',
    outputStyle, // compressed
  },
  function (err, result) {
    if (!err) {
      fs.writeFile(dist_file, result.css, function (err) {
        if (!err) {
          //file written on disk
        }
      });
    } else {
      console.log(err)
    }
  }
);
