/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(num, target) {
   
   let map={}

   for(let i=0;i<num.length;i++){
    const needed=target-num[i]

    if(needed in map){
        return [map[needed],i]
    }
    map[num[i]]=i
   }
};


twoSum([3,2,4],6)