/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let arr=s.toLowerCase().split("")
    console.log(arr)
    let count=0
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]!==arr[i+1]){
            count++
        }
    }
    return count
};