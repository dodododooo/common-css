const sass = require('node-sass');
const fs = require('fs');
const pruduction = process.env.NODE_ENV == 'production';
sass.renderSync(
  {
    file: './main.scss',
    outputStyle: 'expanded',
  },
  function (err, result) {
    if (!err) {
      fs.writeFile('common-css-dev.css', result.css, function (err) {
        if (!err) {
          console.log(err);
        }
      });
    } else {
      console.log(err);
    }
  }
);

if (pruduction) {
  sass.renderSync(
    {
      file: './main.scss',
      outputStyle: 'compressed',
    },
    function (err, result) {
      if (!err) {
        fs.writeFile('common-css.css', result.css, function (err) {
          if (!err) {
            console.log(err);
          }
        });
      } else {
        console.log(err);
      }
    }
  );
}
