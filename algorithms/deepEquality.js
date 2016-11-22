const deepEquals = (a, b) => 
  (!(a instanceof Object) || !(b instanceof Object)) ? a === b :
  (Array.isArray(a) !== Array.isArray(b)) ? false :
  [...Object.keys(a), ...Object.keys(b)].every(k => deepEquals(a[k], b[k]));
