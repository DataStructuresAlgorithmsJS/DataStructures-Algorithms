const map = (array, callback) =>
  (!array.length) ? [] : [callback(array[0])].concat(map(array.slice(1), callback));

console.log(map([1,2,3,4], (a)=>a + 1));
