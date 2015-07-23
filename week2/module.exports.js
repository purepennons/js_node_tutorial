module.exports = function(value) {
  return function() {
    console.log('value', value);
  }
};
