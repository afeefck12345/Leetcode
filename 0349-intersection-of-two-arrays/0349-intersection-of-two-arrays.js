/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set=new Set(nums2);

    let arr=nums1.filter((item)=>set.has(item))
    const set1=new Set(arr)
    return [...set1]
};