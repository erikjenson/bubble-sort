function swap(a, b, arr, index) {
  arr[index] = a;
  arr[index + 1] = b;
}

function bubbleSort(arr) {
  let isSorted = false;

  while (!isSorted) {
    let counter = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      let currentElement = arr[i];
      let nextElement = arr[i + 1];
      if (nextElement < currentElement) {
        swap(nextElement, currentElement, arr, i);
        counter++;
      }
    }
    if (counter === 0) {
      isSorted = true;
    }
  }
  return arr;
}
