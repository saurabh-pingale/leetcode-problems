/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function findCombinations(idx, candidates, target, combinations, temp) {
    if (idx == candidates.length) {
        if (target == 0) {
            combinations.push([...temp]);
        }
        return;
    }

    if (candidates[idx] <= target) {
        temp.push(candidates[idx]);
        findCombinations(idx, candidates, target - candidates[idx], combinations, temp);
        temp.pop(candidates.length - 1);
    }
    findCombinations(idx + 1, candidates, target, combinations, temp);
}

var combinationSum = function(candidates, target) {
    let combinations = [];
    findCombinations(0, candidates, target, combinations, []);
    return combinations;
};