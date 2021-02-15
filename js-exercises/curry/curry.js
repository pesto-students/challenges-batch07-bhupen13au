function curry(fun) {
  return function curries(...args) {
    if (args.length >= fun.length) {
      return fun.apply(this, args);
    }
    return function condition(...argsCond) {
      return curries.apply(this, args.concat(argsCond));
    };
  };
}

export {
  curry,
};
