/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let accVal = init;
    for (let i = 0; i < nums.length; i++) {
        accVal = fn(accVal, nums[i]);
    }

    return accVal;
};