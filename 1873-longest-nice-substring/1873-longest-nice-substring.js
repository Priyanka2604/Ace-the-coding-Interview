/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    let maxLen = 0;
    let ans = "";

    for(let i = 0; i < s.length; i++){
        for(let j = i + 1; j <= s.length; j++){
            let substr = s.slice(i, j);

            //check if nice substring
            if(isNiceString(substr) && substr.length > maxLen){
                maxLen = substr.length;
                ans = substr;
            }
        }
    }

    return ans;
};

function isNiceString(str) {
    const strSet = new Set(str);

    for(const char of strSet){
        if(!strSet.has(char.toUpperCase()) || !strSet.has(char.toLowerCase())){
            return false;
        }
    }
    return true;
}