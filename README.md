# Goal

Create a function that accepts an array of numbers. Once the function completes execution, the array should be sorted. Your function will be your own implementation of the Bubble Sort algorithm.

## Example
```javascript
var unsortedArray = [4, 3, 2, 7, 10, 6];

bubbleSort(unsortedArray);

console.log(unsortedArray); //-> [2, 3, 4, 6, 7, 10];
```

# What is Bubble Sort?

![example](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

> Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

The algorithm iterates through each position of the collection, while at each position it does a comparision check to see if the current position's value is greater than the next value at the next position in the collection, if it is greater, then you swap the values. If it's not greater you move onto the next position.

The array is considered sorted when the algorithm is able to loop through the entire collection without swapping values.

# References
https://en.wikipedia.org/wiki/Bubble_sort