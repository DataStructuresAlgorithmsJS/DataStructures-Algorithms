const quickSort = nums => {
  let left = [], right = [];
	if(!nums.length) return [];
  for(let i = 1; i < nums.length; i++){
    nums[0] > nums[i] ? left.push(nums[i]): right.push(nums[i]);
  }
  return quickSort(left).concat(nums[0], quickSort(right));
}
