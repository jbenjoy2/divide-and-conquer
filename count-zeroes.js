function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let first = -1; //index of first zero
  // find where the first zero is
  while (left <= right) {
    let middleIdx = Math.floor((left + right) / 2);
    let middleVal = arr[middleIdx];
    let nextVal = arr[middleIdx + 1];
    let prevVal = arr[middleIdx - 1];
    // if the middle index and value are both zero, or the middle value is zero and previous is 1, first zero is at middle index and break out of loop
    if ((middleIdx === 0 || prevVal === 1) && middleVal === 0) {
      first = middleIdx;
      break;
      // if middle value is 1 and next value is either 1 or its the end of the array, move up the left to be middle + 1
    } else if (middleVal === 1 && (nextVal === 1 || middleIdx === arr.length - 1)) {
      left = middleIdx + 1;
      // if the current middle value is zero and so is its previous value, move right to be just before current middle
    } else if (middleVal === 0 && prevVal === 0) {
      right = middleIdx - 1;
      // otherwise, at this point, the first zero is right after the middle index so assign it as so and break
    } else {
      first = middleIdx + 1;
      break;
    }
  }
  if (first === -1) return 0; // if first was never reassigned, no zeroes so return zero
  return arr.length - first;
}

module.exports = countZeroes;
