// Find the largest and smallest number in an unsorted array of integers
// Return: object — containing value of min and max
// This can be solved by creating a min and max reference variable
// initialized to equal the value of the first item in the array — arr[0].
// We then loop through the array and compare the values of min/max to arr[i] .
//  If it is more or less, we update the value. Finally, I return an object
//   with the values of min and max.

const arr = [1, 2, 3, 4, 100];
function findMaxMin (arr) {
  let max = arr[0];
  let min = arr[0];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  return {
    "max": max,
    "min": min
  };
}
console.log(findMaxMin(arr)); // Returns object { "max": 100, "min": 1 }
