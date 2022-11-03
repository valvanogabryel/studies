const newLocal = "@babel/preset-env";
const presets = [[newLocal, {
  useBuiltIns: "usage",
  corejs: "3.3.2"
}]];
module.exports = {
  presets
};