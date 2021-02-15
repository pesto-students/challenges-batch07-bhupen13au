function bind(fn, obj) {
  function newFn(...args) {
    if (typeof args[0] !== 'number') {
      return null;
    }
    return fn.apply(obj, args);
  }
  return newFn;
}

module.exports = { bind };
