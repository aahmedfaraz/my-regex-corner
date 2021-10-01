# my-regex-corner

This repository contains my regex learnings and practice.

## What is Regular Expression (shortened as Regex)?

A Regular Expressions (RegEx) is a special sequence of characters that uses a search pattern to find a string or set of strings. For example it allow us to check a form field to try and match a valid email address like, It must have @ symbol, It must end with an extention like .com or .org etc. So Regex allow us to check these kind of things

## How to use in JavScript?

```js
// Sample of Simple Regex with no flag:
// NOTE: with no flag it will only look for first match in the string
regex = new RegExp(/exp/);
string = "string to be search for exp";
console.log(string.match(regex));
// Output:[ 'exp', index: 24, input: 'string to be search for exp', groups: undefined ]
```
