function sortedFrequency(arr, target) {
  let first = findFirstTarget(arr, target);
  // if first returned -1, then it's not in there so just return -1
  let last = findLastTarget(arr, target);
  // determine frequency which is last index - first index + 1
  return first === -1 ? -1 : last - first + 1;
}

// loop to find first occurence of target, if it exists
function findFirstTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middleIdx = Math.floor((left + right) / 2);
    let middleVal = arr[middleIdx];
    if ((middleIdx === 0 || target > arr[middleIdx - 1]) && middleVal === target) {
      return middleIdx;
    } else if (target > middleVal) {
      left = middleIdx + 1;
    } else {
      right = middleIdx - 1;
    }
  }
  return -1;
}
// loop to find last occurence of target, if it exists
function findLastTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middleIdx = Math.floor((left + right) / 2);
    let middleVal = arr[middleIdx];
    if ((middleIdx === arr.length - 1 || target < arr[middleIdx + 1]) && middleVal === target) {
      return middleIdx;
    } else if (target < middleVal) {
      right = middleIdx - 1;
    } else {
      left = middleIdx + 1;
    }
  }
  return -1;
}
module.exports = sortedFrequency;
