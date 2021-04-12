function findFloor(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (target >= arr[right]) return arr[right];

    let middleIdx = Math.floor((left + right) / 2);

    if (arr[middleIdx] === target) return arr[middleIdx];
    else if (middleIdx > 0 && target < arr[middleIdx] && target >= arr[middleIdx - 1])
      return arr[middleIdx - 1];
    else if (target < arr[middleIdx]) {
      right = middleIdx - 1;
    } else {
      left = middleIdx + 1;
    }
  }

  return -1;
}

module.exports = findFloor;
