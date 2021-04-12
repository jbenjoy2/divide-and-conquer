function findRotatedIndex(arr, target) {
  let rotationIndex = findRotationIndex(arr);
  // determine what part of arr we will be searching for the element in
  if (rotationIndex > 0 && target >= arr[0] && target <= arr[rotationIndex - 1]) {
    return findTargetIndex(arr, target, 0, rotationIndex - 1);
  } else return findTargetIndex(arr, target, rotationIndex, arr.length - 1);
}

function findRotationIndex(arr) {
  // if only one element, or if already in ascending order from start to finish, rotation is at index 0
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middleIdx = Math.floor((left + right) / 2);
    // if middle value is greater than next one, that's rotation point so return it
    if (arr[middleIdx] > arr[middleIdx + 1]) return middleIdx + 1;
    else if (arr[left] <= arr[middleIdx]) {
      left = middleIdx + 1;
    } else {
      right = middleIdx - 1;
    }
  }
}

function findTargetIndex(arr, target, left, right) {
  // if array is empty, target can't exist; return -1; alternatively, if the target is less than starting arr value or greater than ending, its not in the range and also wont exist
  if (arr.length === 0 || target < arr[left] || target > arr[right]) return -1;

  while (left <= right) {
    let middleIdx = Math.floor((left + right) / 2);
    if (arr[middleIdx] === target) return middleIdx;
    else if (arr[middleIdx] < target) {
      left = middleIdx + 1;
    } else {
      right = middleIdx - 1;
    }
  }
  return -1;
}
module.exports = findRotatedIndex;
