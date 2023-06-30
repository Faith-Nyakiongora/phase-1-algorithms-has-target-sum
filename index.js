function hasTargetSum(array, target) {
  // Write your algorithm here
  const complements = new Set();

  for (let num of array) {
    if (complements.has(num)){
      return true;
    }

    const complement = target -num;
    complements.add(complement)
  }
  
  return false;
}


  /* 
  Write the Big O time complexity of your function here
  The size of rhe input array is n. thus the time complexity is 0(n).
  there is ans iteration through each number in the array once, performing constant-time operations for each number. 
  */

/* 
  Add your pseudocode here
  Create an empty set called 'complements'
  For each number 'num' in the input array:
      If 'num' is in the 'complements' set:
          - Return true (pair found)
     Calculate the complement as 'target - num'
     Add the complement to the 'complements' set
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
