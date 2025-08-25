/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function findSubset(idx, nums, temp, allSubsets) {
    allSubsets.push([...temp]);
    for (let i = idx; i < nums.length; i++) {
        if (i !== idx && nums[i] === nums[i - 1]) continue;
        temp.push(nums[i]);
        findSubset(i + 1, nums, temp, allSubsets);
        temp.pop();
    }
}

var subsetsWithDup = function(nums) {
    const allSubsets = [];
    nums.sort((a, b) => a - b);
    findSubset(0, nums, [], allSubsets);
    return allSubsets;
};