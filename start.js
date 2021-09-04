const sass = require('node-sass');
const fs = require('fs');
const pruduction = process.env.NODE_ENV == 'production';
sass.render(
  {
    file: './main.scss',
    outputStyle: 'expanded',
  },
  function (err, result) {
    if (!err) {
      fs.writeFile('./common.dev.css', result.css, function (err) {
        if (err) {
          console.log(err);
        }
      });
    } else {
      console.log(err);
    }
  }
);

if (pruduction) {
  sass.render(
    {
      file: './main.scss',
      outputStyle: 'compressed',
    },
    function (err, result) {
      if (!err) {
        fs.writeFile('./common.css', result.css, function (err) {
          if (err) {
            console.log(err);
          }
        });
      } else {
        console.log(err);
      }
    }
  );
}
