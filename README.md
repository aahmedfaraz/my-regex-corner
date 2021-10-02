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

## Metacharacters

- `\d` match any digit character (same as **[0-9]**)
- `\w` match any word character (same as **a-z**,**A-Z**,**0-9** and **\_'s**)
- `\s` match a whitespace character (**spaces**, **tabs** etc)
- `\t` match a tab character only

## Special Characters

- `+` The one-or-more quatifier
- `\` The escape character
- `[]` The character set
- `[^]` The negate symbol in a character set
- `?` The zero-or-one quantifier (makes a preceding character optional)
- `.` Any character whatsoever (except the new line)
- `*` The zero-or-more quantifier (a bit like +)

## If want to match including special characters

```js
// Example: Match * after ahmed
regex = new RegExp(/ahmed\*/g); // use escape character (\)
string = "ahmed ahmed*";
console.log(string.match(regex));
// Output: [ 'ahmed*' ]
```

# Tricks

- String of anything

```js
// String of anything
regex = new RegExp(/.+/g); // This will be string of anything
string = "ahmed 1234 !@#$ faraz ,./;[]{}";
console.log(string.match(regex));
// Output: [ 'ahmed 1234 !@#$ faraz ,./;[]{}' ]
```
