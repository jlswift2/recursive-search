function recursiveSearch(arr, target) {
  if (arr.length === 0) {
    return false
  } else if (arr[0] === target) {
    return true
  } else {
    let newArr = [...arr]
    newArr.shift()
    return recursiveSearch(newArr, target)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// It is possible to check the first index and of the array and then call the function again?
//something I learned: you MUST return the function! 
