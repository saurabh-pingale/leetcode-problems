/**
 * @param {string} s
 * @return {boolean}
 */
function checkPalindrome(idx, s, n) {
    if (idx >= n/2) return true;
    
    if(s[idx] !== s[n - idx - 1]) return false;
    
    return checkPalindrome(idx + 1, s, n);
}

var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let n = s.length;
    return checkPalindrome(0, s, n);
};