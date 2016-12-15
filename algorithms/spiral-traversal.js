const spiralTraversal = (matrix, output) => matrix.length ?
  spiralTraversal(output ?  matrix = matrix[0].reduceRight((memo, _, i)=>
  [...memo, matrix.map(row=> row[i])],[]) : matrix,
  (output || []).concat(matrix.shift())) : output;
console.log(spiralTraversal(
  [
    [32,5,1,6,4,1,4],
    [41,3,5,3,1,5,3],
    [4,6,3,1,4,3,2],
    [9,6,7,5,3,2,6],
    [3,4,73,4,7,4,4],
    [6,3,2,4,1,6,7]
  ]
))
