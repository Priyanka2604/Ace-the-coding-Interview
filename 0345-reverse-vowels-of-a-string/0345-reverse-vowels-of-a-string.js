/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let sarr = s.split('');
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let left = 0, right = s.length - 1;
    while(left < right) {
        while(left < right && !vowels.has(sarr[left])) left++;
        while(left < right && !vowels.has(sarr[right])) right--;
        [sarr[left], sarr[right]] = [sarr[right], sarr[left]];
        left++;
        right--;
    }

    return sarr.join('');
};