const quickSort = nums => {
  let left = [], right = [];
	if(!nums.length) return [];
  for(let i = 1; i < nums.length; i++){
    nums[0] > nums[i] ? left.push(nums[i]): right.push(nums[i]);
  }
  return quickSort(left).concat(nums[0], quickSort(right));
}

// console.log(quickSort([4,1,4,2,6,1,7,3,6,1,6,4,8,53,73,3,1,83,42,84,32,52,75,2,73,42,64]))
