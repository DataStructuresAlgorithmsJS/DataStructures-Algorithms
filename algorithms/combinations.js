const combinations = (n, k, output = []) => {
  (sub = (start, combo) => {
    if(combo.length === k){
      return output.push(combo)
    }
    for(let i = start; i < n + 1; i++){
      combo.push(i)
      sub(i+1, combo.concat())
      combo.pop()
    }
  })(1, [])
  return output;
};
