const allPromises = (args = []) => {
  const resultArray = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    args.forEach((promise) => {
      Promise.resolve(promise)
        .then(item => {
          resultArray.push(item);
          count += 1;
          if (count >= args.length) {
            resolve(resultArray);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};

export { allPromises };
