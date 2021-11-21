const organizedString = (str1, str2) => {
  let str = str1 + str2;
  let freq = {};
  let letters = [];
  let character = null;
  for (let i = 0; i < str.length; i++) {
    character = str.charAt(i).toLowerCase();
    freq[character] ? freq[character]++ : (freq[character] = 1);
  }
  letters = Object.keys(freq);
  letters = letters.sort();

  return letters.join('');
};

console.log(organizedString('aabbccdd', 'effggg'));
