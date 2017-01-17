const isAnagram = (str1, str2) => {
  if(str1.length !== str2.length || str1.length < 1){
    return false;
  }
  const tracker = new Map();
  for(let i of str1){
    tracker.set(i, tracker.get(i) + 1 || 1)
  }
  for(let z of str2){
    if(!tracker.get(z)){
      return false;
    }
    if (tracker.get(z) == 1){
      tracker.delete(z)
    }
    else {
      tracker.set(z, tracker.get(z) -1)
    }
  }
  return !!(tracker.size === 0);
}
