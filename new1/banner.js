const childProcess = require("child_process");

const banner = () => {
  const commit = childProcess.execSync("git rev-parse --short HEAD");
  const user = childProcess.execSync("git config user.name");
  const data = new Date().toLocaleString();

  return `commitVersion: ${commit} / ${data} / ${user}`;
};
module.exports = banner;
