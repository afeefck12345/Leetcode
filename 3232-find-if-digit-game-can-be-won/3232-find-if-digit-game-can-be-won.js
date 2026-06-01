/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let single=0;
    let double=0;
    let total=0
    for(num of nums){
        total+=num;

        if(num<10){
            single+=num
        }else if(num<100){
            double+=num
        }

    }
    return single>total-single||
    double>total-double
};