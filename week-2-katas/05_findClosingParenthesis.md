# Find the Closing Parenthesis

Create a function that takes a string containing at least one or more pairs of matched parentheses and a number, n, which represents the nth opening parenthesis.

Your function should find the index position of the closing parenthesis that matches the nth opening parenthesis.

The parentheses will always be matched and valid, and you will only ever get regular parentheses () and no brackets etc.

If the string is empty or no number is given, you should return -1.

## Examples

You can use these examples to start building up your test suite

```javascript
findClosingParenthesis('');  // returns -1

findClosingParenthesis('hello');  // returns -1

findClosingParenthesis('(hello)', 1);  // returns 6

findClosingParenthesis('Hello, (world). (Something Else).', 2);  // returns 31

findClosingParenthesis('Hello, (world, (foo) bar (something) else), foo (bar) cat', 3);  // returns 35

findClosingParenthesis('Hello, (world, (foo) bar (something) else), foo (bar) cat', 1);  // returns 41
```
