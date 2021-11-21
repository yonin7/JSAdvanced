function getFrequency(string) {
  let freq = {};
  let counter = 0;
  let character = null;
  for (let i = 0; i < string.length; i++) {
    character = string.charAt(i).toLowerCase();
    freq[character] ? freq[character]++ : (freq[character] = 1);
  }

  for (const [key, value] of Object.entries(freq)) {
    if (value > 1) {
      counter++;
    }
  }

  return counter;
}

console.log(getFrequency('aAabbcccde'));
