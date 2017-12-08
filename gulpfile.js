let gulp = require("gulp");
const bump = require('gulp-bump');
const fs = require('fs');
const xml = require('xml2js');


gulp.task("default", () => {
  increasePackageVersion()
    .then(increaseAppVersion)
    .then(done => console.log("done!"))
    .catch(ex => {
      console.log(ex);
    })
});

const increasePackageVersion = () => {
  return new Promise((resolve, reject) => {
    gulp.src('./package.json')
      .pipe(bump())
      .pipe(gulp.dest("./"))
      .on('end', resolve)

  });
};

const increaseAppVersion = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./config.xml", (err, file) => {
      const configFile = file.toString();
      xml.parseString(configFile, (err, result) => {

        const currentVersion = require("./package.json").version;
        let currentXML = result;

        currentXML.widget.$.version = currentVersion;
        currentXML.widget.$['android-versionCode'] = getAndroidVersion(currentVersion);

        const builder = new xml.Builder();
        const final = builder.buildObject(currentXML);

        fs.writeFile("./config.xml", final, 'utf-8', (error) => {
          console.log("file written!");
          resolve();
        });

      });
    });
  })
};

const getAndroidVersion = (input) => {
  const nums = input.split('.');
  const major = nums[0] * 100000;
  const minor = nums[1] * 1000;
  const patch = nums[2] * 10;
  return major + minor + patch;
};
