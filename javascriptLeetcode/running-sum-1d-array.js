/*

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

*/

var runningSum = function(nums) {
    
    answer = []
    inc = 0
    for (x=0; x < nums.length; x++){
        let z = inc + nums[x]
        answer.push(z)
        inc = z
    }
    return answer
    
};

/*

OR
https://stackoverflow.com/questions/20477177/creating-an-array-of-cumulative-sum-in-javascript



const cumulativeSum = (sum => value => sum += value)(0);

console.log([5, 10, 3, 2].map(cumulativeSum));


*/