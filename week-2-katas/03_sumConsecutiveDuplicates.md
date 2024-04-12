# Sum Consecutive Duplicates

The challenge is to implement a function which adds together all the consecutive numbers in an array and pushes them into a new array.

## Examples:

You can use these examples to start building up your test suite:

```javascript
    sumConsecutiveDuplicates([1, 2, 3]);  // returns [1, 2, 3]

    sumConsecutiveDuplicates([1, 1, 2, 3]);  // returns [2, 2, 3]

    sumConsecutiveDuplicates([1, 1, 2, 2, 3, 3]);  // returns [2, 4, 6]

    sumConsecutiveDuplicates([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1]);  // returns [2, 2, 4, 2, 3]
```

## Extra credit

In the last example, the returned array has consecutive elements in it. Write a function `reduceConsecutives()` which recursively uses your `sumConsecutiveDuplicates()` function to reduce the array down until there are no more consecutive duplicate numbers.

For example:

```javascript
sumConsecutiveDuplicates([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1]);
// returns [2, 2, 4, 2, 3]
// the returned array has consecutives
sumConsecutiveDuplicates([2, 2, 4, 2, 3]);
// returns [4, 4, 2, 3]
// once again it has consecutives!
sumConsecutiveDuplicates([4, 4, 2, 3]);
// returns [8, 2, 3]
```
