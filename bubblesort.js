var unsortedArray = [4, 3, 2, 7, 10, 6];

function bubbleSort (array) {
  var swapElement;
  do {
    swapElement = false;
    for (var i = 1; i < array.length; i++){
      if (array[i-1] > array[i]){
        var x = array[i-1];
        array[i-1] = array[i];
        array[i] = x;
        swapElement = true;
      }
    }
  } while (swapElement);
  return array;
}

console.log(bubbleSort(unsortedArray));
