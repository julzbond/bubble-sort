var unsortedArray = [4, 3, 2, 7, 10, 6];

Array.prototype.bubbleSort = function() {
  var swapElement;
  do {
    swapElement = false;
    for (var i = 1; i < this.length; i++){
      if (this[i-1] > this[i]){
        var x = this[i-1];
        this[i-1] = this[i];
        this[i] = x;
        swapElement = true;
      }
    }
  } while (swapElement);
  return this;
};

console.log(unsortedArray.bubbleSort());
