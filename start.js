const sass = require('sass');
const fs = require('fs');
const production = process.argv[2] == 'production';

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

if (production) {
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
          } else {
            writeJson();
          }
        });
      } else {
        console.log(err);
      }
    }
  );
}

function writeJson() {
  fs.readFile('./common.dev.css', function(error, data) {
    if (error) {
      console.log(error);
      return;
    }
    try {
      let str = data.toString();
      let arr = str.match(/.*\{(.*\n*\s)*?\}/ig);
      fs.writeFileSync('./css-json.js', `var cssJsonArr = ${JSON.stringify(arr)}`);
    } catch (error) {
      console.log(error);
      return;
    }
  })
}
