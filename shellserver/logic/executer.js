const { exec } = require("child_process");

module.exports = {
  execute: function (data) {
    exec(data, (e, stdout, stderr) => {
      if (e) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
  });
  }
}