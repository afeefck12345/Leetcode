/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let clean=s.trim()
    .toLowerCase()
    .split("")
    .filter((ch)=>(ch>='a'&& ch<='z')||(ch>='0' && ch<='9'))
    .join('')

    
    

    return clean===clean.split("").reverse().join('')




    
};