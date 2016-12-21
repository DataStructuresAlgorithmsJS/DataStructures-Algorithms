const allAnagrams = (str, output = []) => {
  str.length === 1 ? output = [...output, str] : [...str].forEach((val, i) =>
    allAnagrams(str.substr(0, i)+str.substr(i+1))
    .forEach(next => output = [...output, val+next]));
  return [...new Set(output)];
}
