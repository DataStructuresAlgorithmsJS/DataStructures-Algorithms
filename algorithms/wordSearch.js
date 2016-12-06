const wordSearch = (array, word) => {
  const helper = (i, z, index) => {
    if(index === word.length){
      return true;
    }
    if(0 <= i && i < array.length && array[i][z] === word[index]){
      let holder = array[i][z];
      array[i][z] = true;
      if(helper(i-1, z, index+1) || helper(i+1, z, index+1) || helper(i, z-1, index+1) || helper(i, z+1, index+1)){
        return true;
      }
      array[i][z] = holder;
    }
    return false;
  }

  for(let i = 0; i < array.length; i++){
    for(let z = 0; z < array[i].length; z++){
      if(array[i][z] === word[0] && helper(i, z, 0)){
        return true;
      }
    }
  }
  return false;
}
// const testData = [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ];
// console.log(wordSearch(testData, 'A'))
