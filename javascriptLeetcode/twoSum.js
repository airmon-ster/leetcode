/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

https://leetcode.com/problems/two-sum/

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    
    for (i=0; i < nums.length; i++){
        for (j=i+1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]){
                return [i,j]
            }
        }
    }
    
};

/*
OR use a map
*/

var twoSum = function(nums, target) {
    
    let solution = new Map()
    for (x=0;x < nums.length;x++){
        solution.set(nums[x],x)
    }
    console.log(solution)
    for (x=0; x < nums.length;x++){
        let complement = target - nums[x]
        
        if (solution.has(complement) && solution.get(complement) != x){
            console.log(complement)
            return [x, solution.get(complement)]
        }
    }
                
    
};