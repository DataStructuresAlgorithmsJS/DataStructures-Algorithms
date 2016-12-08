const uniqueSubsets = (nums, map = new Map()) => {
  nums.sort((a, b) => a - b);
  const sub = (left, combo) => {
    if(!map.get(combo.toString())){
      map.set(combo.toString(), combo)
    }
    left.forEach((val, i)=> sub(left.slice(i+1), combo.concat(val)))
  }
  sub(nums, []);
  return [...map.values()]
}
