const allAnagrams = (str, sol = [])=> {
  !str.length ? sol = ['']:
  [...str].map((val, $) => allAnagrams(str.substr(0, $)+
  str.substr($ + 1)).map(cur => sol=[...sol, val+cur]));
  return [...new Set(sol)];
}
