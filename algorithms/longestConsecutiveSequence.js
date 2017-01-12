const longestConsecutive = (nums, map = {}) => {
  nums.forEach(val => map[val] = true);

  return nums.reduce((memo, val) => {
    if (!map[val - 1]) {
      let count = 0, cur = val;
      while (map[cur]) {
        count++;
        cur++;
      }
      memo = Math.max(memo, count);
    }
    return memo;
  }, 0);
};
