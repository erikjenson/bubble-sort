function swap(a, b, arr, index) {
  if (a < b) {
    arr[index] = a;
    arr[index + 1] = b;
    counter++
  }
}

function bubbleSort(arr) {
  let isSorted = false;

  while (!isSorted) {
    let counter = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      let currentElement = arr[i];
      let nextElement = arr[i + 1];
      swap(nextElement, currentElement, arr, i);
      }
      if (counter === 0) {
        isSorted = true;
      }
    }
  }
  return arr;
}
