function bind(fn, obj) {
  function newFn(value) {
    const objValue = Object.values(obj)[0];
    if (typeof value !== 'number') {
      return null;
    }
    return objValue + value;
  }
  return newFn;
}

module.exports = { bind };
