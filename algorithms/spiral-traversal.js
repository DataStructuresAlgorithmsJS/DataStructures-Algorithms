const spiralTraversal = (matrix, output) => matrix.length ?
  spiralTraversal(output ?  matrix = matrix[0].reduceRight((memo, _, i)=>
  [...memo, matrix.map(row=> row[i])],[]) : matrix,
  (output || []).concat(matrix.shift())) : output;
