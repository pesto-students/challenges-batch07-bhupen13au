function chunkArrayInGroups(array, chunkSize) {
  const finalArr = [];
  const maxIter = Math.ceil(array.length / chunkSize);
  for (let i = 0; i < maxIter; i += 1) {
    finalArr.push(array.splice(0, chunkSize));
  }
  return finalArr;
}

export {
  chunkArrayInGroups,
};
