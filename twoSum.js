//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//Input an array and a target; nums is an array, target is the product of adding to indices VALUES. Return the two index positions that represent the numbers that add up to the target.   

// **Create an object containing the key-value pairs of the element and its index, respectively.
// Iterate through array. For currentElement, compute currentDifference.

// If currentDifference exists in hashTable and currentElementIndex !== hashTable[currentDifference], return the indices of each element.

// If currentDifference does not exist or the indices of both elements are equal, move to the next element in the array.**

var twoSum = function(nums, target){
    
    numsIndexes = {};

    for (let i = 0; i < nums.length; i += 1) {
      let currentDifference = target - nums[i];
  
      if (numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i) {
        return [i, numsIndexes[currentDifference]];
      } else {
        numsIndexes[nums[i]] = i;
      }
    }
  };  
    



