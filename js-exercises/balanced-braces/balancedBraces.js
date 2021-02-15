function balancedBraces(str) {
  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    if ((str[i] === '(') || (str[i] === '{') || (str[i] === '[')) {
      stack.push(str[i]);
    } else if ((str[i] === ')' && stack[stack.length - 1] === '(') || (str[i] === '}' && stack[stack.length - 1] === '{') || (str[i] === ']' && stack[stack.length - 1] === '[')) {
      stack.pop();
    } else if ((str[i] === ')') || (str[i] === '}') || (str[i] === ']')) {
      return false;
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
}

export {
  balancedBraces,
};
