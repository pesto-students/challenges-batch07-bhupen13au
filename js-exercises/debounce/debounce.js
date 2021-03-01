// creating a custom exception funtion
function CustomException(message) {
  const error = new Error(message);
  return error;
}

// adding create method to CustomException
CustomException.prototype = Object.create(Error.prototype);

// function which debounces other functions.
// learn more [here](https://css-tricks.com/debouncing-throttling-explained-examples/)
function debounce(fn, timeInMs) {
  // checking for valid parameters
  if (typeof fn !== 'function' || typeof timeInMs !== 'number') {
    throw new CustomException('Invalid Parameters type!');
  }
  // initializing timer with 0
  let timer = 0;
  return function manageTimer() {
    // clears out timer if running. so that one task runs at a time
    clearTimeout(timer);
    // calling funtion fn asynchronously
    timer = setTimeout(() => {
      fn();
    }, timeInMs);
  };
}

export { debounce };
