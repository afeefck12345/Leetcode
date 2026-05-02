function isPalindrome(x){
    x=x.toString()
    rev=""

    for(i=x.length-1;i>=0;i--){
        rev += x[i]
    }
    return x===rev
}
