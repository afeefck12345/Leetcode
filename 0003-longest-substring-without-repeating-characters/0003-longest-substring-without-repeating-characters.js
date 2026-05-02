
var lengthOfLongestSubstring = function(s) {
    
    let longest=""

    for(let i=0;i<s.length;i++){
        let current=""
        for(let j=i;j<s.length;j++){
            if(current.includes(s[j])){
                break
            }
            current += s[j];
        }
        if(current.length>longest.length){
            longest=current
        }

    }
  return longest.length



};