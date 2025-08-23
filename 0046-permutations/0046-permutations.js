/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function findPermutation(idx, nums, allPermutations) {
    if (idx === nums.length) {
        allPermutations.push([...nums]);
        return;
    }

    for (let i = idx; i < nums.length; i++) {
        [nums[idx], nums[i]] = [nums[i], nums[idx]];
        findPermutation(idx + 1, nums, allPermutations);
        [nums[idx], nums[i]] = [nums[i], nums[idx]];
    }
}

var permute = function(nums) {
    let allPermutations = [];
    findPermutation(0, nums, allPermutations);
    return allPermutations;
};