function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (right < left) return 0;
    if (right === left) return left;
    let middleIdx = Math.floor((left + right) / 2);

    if (middleIdx < right && arr[middleIdx + 1] < arr[middleIdx]) {
      return middleIdx + 1;
    } else if (middleIdx > left && arr[middleIdx] < arr[middleIdx - 1]) {
      return middleIdx;
    } else if (arr[right] > arr[middleIdx]) {
      right = middleIdx - 1;
    } else {
      left = middleIdx + 1;
    }
  }
  return 0;
}

module.exports = findRotationCount;
