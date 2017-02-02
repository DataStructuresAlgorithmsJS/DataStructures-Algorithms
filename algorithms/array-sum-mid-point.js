const midPoint = (array, cur = 0, mid) => {
  const sum = array.reduce((memo, val)=> memo+val, 0);
  for(let i = 1; i < array.length; i++){
    cur += array[i - 1];
    if(sum - cur === cur + array[i])
      return i;
  }
  return null;
}

console.log(midPoint([1,2,3,4,1,5]))
