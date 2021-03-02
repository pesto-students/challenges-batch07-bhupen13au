function limitFunctionCallCount(callBackFn, limit) {
  // initializing object dependent counter
  let counter = 0;
  // returning function which can be called with the given args
  return function callObj(...args) {
    // incrementing counter by 1 when called once
    counter += 1;
    if (counter < limit) {
      // returning value of callBackFn when called
      return callBackFn(...args);
    }
    return null;
  };
}

export {
  limitFunctionCallCount,
};
