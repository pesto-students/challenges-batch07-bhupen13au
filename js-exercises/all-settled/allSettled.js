function allSettled(args) {
  const resultArr = [];
  return new Promise(resolve => {
    args.forEach((promise, index) => Promise.resolve(promise)
      .then(result => {
        resultArr.push({ status: 'fulfilled', value: result });
        if ((index + 1) === args.length) {
          resolve(resultArr);
        }
      })
      .catch(err => {
        resultArr.push({ status: 'rejected', reason: err });
        if ((index + 1) === args.length) {
          resolve(resultArr);
        }
      }));
  });
}

export { allSettled };
