// array to sort
const mArray = [37, 29, 52, 84, 75, 41, 66, 10, 94];

// top down merge sort
const topDown = function topDown(left, right) {
  const mArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mArray.push(left.shift());
    } else {
      mArray.push(right.shift());
    }
  }
  return mArray.concat(left.slice()).concat(right.slice());
};

const mergeSort = function mergeSort(mArray) {
  if (mArray.length < 2) {
    return mArray;
  }

  const middle = Math.floor(mArray.length / 2);
  const left = mArray.slice(0, middle);
  const right = mArray.slice(middle);

  return topDown(mergeSort(left), mergeSort(right));
};

document.getElementById('mSort').innerHTML = mergeSort(mArray.slice());
