/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function findCombinations(idx, candidates, target, combinations, temp) {
    if (target === 0) {
        combinations.push([...temp]);
        return;
    }

    for (let i = idx; i < candidates.length; i++) {
        if (i > idx && candidates[i] == candidates[i - 1]) continue;
        if (candidates[i] > target) break;

        temp.push(candidates[i]);
        findCombinations(i + 1, candidates, target - candidates[i], combinations, temp);
        temp.pop();   
    }
}

var combinationSum2 = function(candidates, target) {
    let combinations = [];
    candidates.sort((a, b) => a - b);
    findCombinations(0, candidates, target, combinations, []);
    return combinations;
};