/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function findSubset(idx, result, nums, n, allSubsets) {
    if (idx === n) {
        allSubsets.push([...result]);
        return;
    }

    result.push(nums[idx]);
    findSubset(idx + 1, result, nums, n, allSubsets);

    result.pop();
    findSubset(idx + 1, result, nums, n, allSubsets);
}

var subsets = function(nums) {
    let allSubsets = [];
    let n = nums.length;

    findSubset(0, [], nums, n, allSubsets);
    return allSubsets;
};