// const sumEvenArgs = (...args) => {
//   let sum = 0;
//   args.forEach((value) => {
//     if (value % 2 === 0) {
//       sum += value;
//     }
//   });
//   return sum;
// };

const sumEvenArgs = (...args) => args.filter((value) => value % 2 === 0)
  .reduce((acc, value) => acc + value, 0);

export { sumEvenArgs };
