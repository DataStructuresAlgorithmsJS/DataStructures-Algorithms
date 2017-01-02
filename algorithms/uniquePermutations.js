const permuteUnique = (nums, map = new Map()) => {
  nums.sort((a,b)=> a - b);
  const sub = (left, combo) => {
    if(!left.length && !map.get(combo.toString())){
      return map.set(combo.toString(), combo);
    }
    left.forEach((val, i)=> sub(left.slice(0,i).concat(left.slice(i+1)), combo.concat(val)));
  }
  sub(nums, []);
  return [...map.values()];
};

console.log(permuteUnique([1,1,2]))
