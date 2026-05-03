/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let word=0
    let max=0
    for(let sentence of sentences){
      word=sentence.split(' ').length
      max=Math.max(word,max)
    }
    return max
};