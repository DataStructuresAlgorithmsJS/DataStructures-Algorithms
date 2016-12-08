const comboSum = (candidates, target, output = []) => {
  candidates.sort((a, b) => a - b);
  (sub = (target, index, combo) =>{
    if (target === 0)
      return output.push(combo.slice());

    while(index < candidates.length){
      if (candidates[index] > target) break;
      sub(target - candidates[index], index, combo = [...combo, candidates[index]]);
      combo.pop();
      index++;
    }
  })(target, 0, []);
  return output;
};
