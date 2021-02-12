// function isAlpha(ch) {
//   return /^[A-Z]$/i.test(ch);
// }

function rot13(str) {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    const charCode = str.charCodeAt(i);

    if (
      (charCode < 65 || charCode > 122)
            || (charCode > 90 && charCode < 97)
    ) {
      result += str[i];
    } else {
      let newCharCode = charCode + Math.ceil(13 % 26);

      if (charCode >= 97 && newCharCode > 122) {
        newCharCode = newCharCode - 122 + 96;
      }
      if (charCode <= 90 && newCharCode > 90) {
        newCharCode = newCharCode - 90 + 64;
      }

      result += String.fromCharCode(newCharCode);
    }
  }
  return result;
}

export {
  rot13,
};
