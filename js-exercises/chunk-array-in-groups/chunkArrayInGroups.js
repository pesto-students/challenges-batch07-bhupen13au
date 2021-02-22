function chunkArrayInGroups(array, chunkSize) {
  const finalArr = [];
  const maxIter = Math.ceil(array.length / chunkSize);
  let start = 0;
  let end = chunkSize;
  for (let i = 0; i < maxIter; i += 1) {
    finalArr.push(array.slice(start, end));
    end += chunkSize;
    start += chunkSize;
  }
  return finalArr;
}

export {
  chunkArrayInGroups,
};
