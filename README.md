# JavaScript Loose Comparison Pitfalls: NaN and -0

This repository demonstrates unexpected behavior in JavaScript's loose comparison operator (==) when dealing with NaN (Not a Number) and -0 (negative zero).

## The Bug

The `foo` function in `bug.js` intends to check for equality between two numbers. However, it produces incorrect results for NaN and -0 because of how loose comparison works:

* **NaN:** NaN is never equal to itself or any other value, even when using loose comparison. This is a common source of confusion and errors.
* **-0 and 0:** In JavaScript, -0 and 0 are considered equal under loose comparison. This can lead to unexpected behavior in applications where the sign of zero is significant.

## The Solution

The `bugSolution.js` file shows the use of strict equality (`===`) or other techniques to correctly handle NaN and -0 comparisons.  Strict equality distinguishes between -0 and 0 and correctly identifies NaN as unequal to itself.

## How to run

1. Clone the repository
2. Open `bug.js` and `bugSolution.js` in a JavaScript environment (e.g., browser's developer console, Node.js).
3. Run the code to observe the differences in output between loose and strict comparisons.