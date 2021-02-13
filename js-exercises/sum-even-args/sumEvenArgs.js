const sumEvenArgs = (...args) => {
  let sum = 0;
  args.forEach((value) => {
    if (value % 2 === 0) {
      sum += value;
    }
  });
  return sum;
};

export { sumEvenArgs };
