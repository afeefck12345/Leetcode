/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product=n.toString().split('')
    console.log(product)
    let num=1
    let sum=0
    for(let i=0;i<product.length;i++){
        num*=Number(product[i])
        sum+=Number(product[i])
    }
    console.log(num)
    console.log(sum)
    let result=num-sum
    return result
    
};