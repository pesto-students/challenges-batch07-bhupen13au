/* eslint-disable linebreak-style */
function duplicateLetters(...args) {
  const totalArr = [];
  let arr = args[0].split('');
  arr = arr.sort();
  let count = 0;
  for (let i = 0; i < arr.length; i += count) {
    count = 1;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    totalArr.push(count);
  }
  const max = Math.max(...totalArr);
  if (max === 1) {
    return false;
  }
  return max;
}

export {
  duplicateLetters,
};
