/* eslint-disable linebreak-style */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function abbreviateString(str) {
  if (str) {
    const splitArr = str.split(' ');
    let firstName = splitArr[0];
    let lastName = splitArr[splitArr.length - 1];
    firstName = capitalizeFirstLetter(firstName);
    lastName = capitalizeFirstLetter(lastName);
    return `${firstName} ${lastName[0]}.`;
  }
  throw TypeError;
}

export { abbreviateString };
