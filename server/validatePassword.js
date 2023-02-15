module.exports = function (password) {
  if (/^[A-Za-z]\w{7,14}$/.test(password)) {
    return true;
  }
  return false;
};
