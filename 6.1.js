const accum = (str) => {
  let charArr = str.split('');
  let char = [];
  for (let i = 0; i < charArr.length; i++) {
    char[i] = charArr[i].toUpperCase() + charArr[i].repeat(i);
  }
  return char.join('-');
};

console.log(accum('abcd'));
