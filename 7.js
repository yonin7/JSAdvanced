const evenNumbers = (arr) => {
  let eveNum = arr.filter((num) => num % 2 == 0);
  return eveNum;
};

console.log(evenNumbers([1, 2, 3, 4, 5, 6]));

const oddNumbers = (arr) => {
  let oddNum = [];
  arr.forEach((num) => {
    if (num % 2 != 0) oddNum.push(num);
  });
  return oddNum;
};
console.log(oddNumbers([1, 2, 3, 4, 5, 6]));

const powNumbers = (arr) => {
  const powNum = arr.map((num) => num * num);
  return powNum;
};
console.log(powNumbers([1, 2, 3, 4, 5, 6]));
