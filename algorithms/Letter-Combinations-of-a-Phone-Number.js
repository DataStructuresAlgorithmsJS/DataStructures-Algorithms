const letterCombinations = (str, output = [], combo = '') => {
  if(!str.length) return output.push(combo);
  [...teleObj[str[0]]].map(val => letterCombinations(str.slice(1), output, combo+val))
  return output;
}
const teleObj = {
  0: '0', 1: '1', 2: 'ABC', 3: 'DEF', 4: 'GHI', 5: 'JKL', 6: 'MNO', 7: 'PQRS', 8: 'TUV', 9: 'WXYZ'
};
