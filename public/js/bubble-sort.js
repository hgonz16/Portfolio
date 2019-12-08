// swap function
function swap(array, i, j) {
  const sArray = array;
  const temp = array[i];
  sArray[i] = sArray[j];
  sArray[j] = temp;
}

// bubble sort function
function bubbleSort(inputArray = []) {
  const arrToSort = inputArray.slice();
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arrToSort.length; i += 1) {
      if (arrToSort[i] && arrToSort[i + 1] && arrToSort[i] > arrToSort[i + 1]) {
        swap(arrToSort, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return arrToSort;
}

// Adds user input into an Array
// eslint-disable-next-line no-unused-vars
function addTo() {
  const arr = document.getElementById('userinput').value
    .split(',')
    .map(num => parseInt(num, 10));
  // eslint-disable-next-line no-console
  console.log(arr);

  document.getElementById('bSort').innerHTML = bubbleSort(arr);
}
