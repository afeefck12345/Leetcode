/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {


    for( let word of words){
        
        if(word===word.split('').reverse().join('')){
            console.log(word)
            return word
        }
    }
    return ""
};