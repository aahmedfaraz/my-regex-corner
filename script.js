console.log('Hello Regex!');

// Let's rock ;)

// Required variables
let regex, string;

// ======================================== 1. Simple Pattern

// 1.1. with no flag
// NOTE: with no flag it will only look for first match in the string
regex = new RegExp(/keys/);
string = 'keys keys keys';
console.log(string.match(regex));
// Output: [ 'keys', index: 0, input: 'keys keys keys', groups: undefined ]

// 1.2. with global flag 'g'
// NOTE: with global flag 'g' it will look for every match in the string
regex = new RegExp(/keys/g); // add global flag 'g' at the end
string = 'keys keys keys';
console.log(string.match(regex));
// Output: [ 'keys', 'keys', 'keys' ]

// 1.3. with case-insensitive flag 'i'
// NOTE: regex is by default case-sensitive,
// but with case-insensitive flag 'i' it will look for every match in the string
// Irrespective of case of characters
regex = new RegExp(/GLASS/g); // case sensitive (By default)
string = 'GLASS glass GLaSs';
console.log(string.match(regex));
// Output: [ 'GLASS' ]
regex = new RegExp(/GLASS/gi); // case insensitive
string = 'GLASS glass GLaSs';
console.log(string.match(regex));
// Output: [ 'GLASS', 'glass', 'GLaSs' ]

// ======================================== 2. Character Sets

// 2.1. to match more than one character on a one single place
// NOTE: with characters in [] braces,
// It will match all characters in [] braces for that specified position in the string
regex = new RegExp(/noon/g);
string = 'moon noon soon';
console.log(string.match(regex));
// Output: [ 'noon' ]
regex = new RegExp(/[mn]oon/g); // case sensitive (By default)
string = 'moon Moon noon Noon soon';
console.log(string.match(regex));
// Output: [ 'moon', 'noon' ]
regex = new RegExp(/[mn]oon/gi); // case insensitive
string = 'moon Moon noon Noon soon';
console.log(string.match(regex));
// Output: [ 'moon', 'Moon', 'noon', 'Noon' ]
// Some More Examples
regex = new RegExp(/[123]ahmed/g);
string = '1ahmed 2ahmed 3ahmed 4ahmed 5ahmed';
console.log(string.match(regex));
// Output: [ '1ahmed', '2ahmed', '3ahmed' ]
regex = new RegExp(/[abc]1/g);
string = 'a1 b1 c1 d1 e1 11 21 31';
console.log(string.match(regex));
// Output: [ 'a1', 'b1', 'c1' ]

// 2.2. to match characters except some characters on a one single place
// NOTE: by adding ^ in start and then characters in [], it will not match for those characters
regex = new RegExp(/[^fw]ix/g); // Match every character except f and w at first position
string = 'fix six mix wix';
console.log(string.match(regex));
// Output: [ 'six', 'mix' ]

// ======================================== 3. Ranges

// 3.1. to match characters within a range
// NOTE: with - sign between two characters in [] braces shows range
regex = new RegExp(/[a-z]1/g); // Match every character between a to z at first position
string = 'a1 b1 c1 A1 B1 C1 11 21 31';
console.log(string.match(regex));
// Output: [ 'a1', 'b1', 'c1' ]
regex = new RegExp(/[a-zA-Z]1/g); // Match every character between a to z & A to Z at first position
string = 'a1 b1 c1 A1 B1 C1 11 21 31';
console.log(string.match(regex));
// Output: [ 'a1', 'b1', 'c1', 'A1', 'B1', 'C1' ]
regex = new RegExp(/[a-zA-Z0-9]1/g); // Match every character between a to z, A to Z & 0 to 9 at first position
string = 'a1 b1 c1 A1 B1 C1 11 21 31';
console.log(string.match(regex));
// Output: [ 'a1', 'b1', 'c1', 'A1', 'B1', 'C1', '11', '21', '31']

// 3.2. to apply character set on more than one number
regex = new RegExp(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g); // Pakistan Phone number
string = '03001234567';
console.log(string.match(regex));
// Output: [ '03001234567' ]
regex = new RegExp(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g); // Pakistan Phone number
string = '0300-1234567';
console.log(string.match(regex));
// Output: null

// ======================================== 4. Repeating Characters

// 4.1. to repeat character set for atleast one time upto as many times as possible
// NOTE: + flag will match atleast one character with character set upto as many characters as possibly matched together
regex = new RegExp(/[0-9]+/g);
string = '0123a4567b89c';
console.log(string.match(regex));
// Output: [ '0123', '4567', '89' ]
regex = new RegExp(/[a-z]+@gmail.com/g);
string = 'ahmed@gmail.com faraz@gmail.com ahmed@yahoo.com';
console.log(string.match(regex));
// Output: [ 'ahmed@gmail.com', 'faraz@gmail.com' ]

// 4.2. to repeat character set upto specific range
// NOTE: {} braces with character set specifies how many times charcter set should be repeated
// without {} braces
regex = new RegExp(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g); // Pakistan Phone number
string = '03001234567';
console.log(string.match(regex));
// Output: [ '03001234567' ]
// with {} braces
regex = new RegExp(/[0-9]{11}/g); // repeat character set upto 11 characters
string = '03001234567';
console.log(string.match(regex));
// Output: [ '03001234567' ]
regex = new RegExp(/[a-z]{5}/g); // repeat character set set upto 5 characters
string = 'bin pin tin jupiter saturn typewriter';
console.log(string.match(regex));
// Output: [ 'jupit', 'satur', 'typew', 'riter' ]

// 4.3. to repeat character set in between a range
// NOTE: [characterSet]{min, max} is syntax for match character in between a specific range
regex = new RegExp(/[a-z]{5,8}/g); // repeat character set set in between 5 to 8 characters (min: 5, max: 8)
string = 'bin pin tin jupiter saturn typewriter successful';
console.log(string.match(regex));
// Output: [ 'jupiter', 'saturn', 'typewrit', 'successf' ]
regex = new RegExp(/[a-z]{5,}/g); // match anything atleast have 5 characters
string = 'bin pin tin jupiter saturn typewriter successful';
console.log(string.match(regex));
// Output: [ 'jupiter', 'saturn', 'typewriter', 'successful' ]

// ======================================== 5. Metacharacters and Escaping

// NOTE:
// - `\d` match any digit character (same as [0-9])
// - `\w` match any word character (same as a-z,A-Z,0-9 and \_'s)
// - `\s` match a whitespace character (spaces, tabs etc)
regex = new RegExp(/\d/g); // match any single character to be a digit
string = '12345';
console.log(string.match(regex));
// Output: [ '1', '2', '3', '4', '5' ]
regex = new RegExp(/\w/g); // match any single character to be a word
string = 'ahmed';
console.log(string.match(regex));
// Output: [ 'a', 'h', 'm', 'e', 'd' ]
regex = new RegExp(/\s/g); // match any single character to be a whitespace character
string = ' a b c    d   e   f';
console.log(string.match(regex));
// Output: [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
regex = new RegExp(/\d\s\w/g); // This should be digit then space then word
string = '0 a - 1 b - 2 c';
console.log(string.match(regex));
// Output: [ '0 a', '1 b', '2 c' ]
regex = new RegExp(/\d{5}\s\w{5}/g); // This should be 5 digits then space then 5 words
string = '12345 ahmed 54321 faraz 1234 calm 12345 calm 1234 peace';
console.log(string.match(regex));
// Output: [ '12345 ahmed', '54321 faraz' ]

// ======================================== 6. Special Characters

// NOTE:
// - `+` The one-or-more quatifier
// - `\` The escape character
// - `[]` The character set
// - `[^]` The negate symbol in a character set
// - `?` The zero-or-one quantifier (makes a preceding character optional)
// - `.` Any character whatsoever (except the new line)
// - `*` The zero-or-more quantifier (a bit like +)

// 6.1. Special Character (?)
regex = new RegExp(/keys?/g); // character before ? (s) is now optional
string = 'keys key';
console.log(string.match(regex));
// Output: [ 'keys', 'key' ]
regex = new RegExp(/ke?ys?/g); // character before ? (s & e) are now optional
string = 'keys kys key ky';
console.log(string.match(regex));
// Output: [ 'keys', 'kys', 'key', 'ky' ]

// 6.2. Special Character (.)
regex = new RegExp(/car./g); // character at (.) position can be anything now (except new line)
string = 'car cars car1 card car#';
console.log(string.match(regex));
// Output: [ 'car ', 'cars', 'car1', 'card', 'car#' ]
regex = new RegExp(/.car./g); // characters at (.) position can be anything now (except new line)
string = 'car cars car1 card car# 1car 1car1 2card';
console.log(string.match(regex));
// Output: [ ' cars', ' car1', ' card', ' car#', '1car ', '1car1', '2card']

// 6.3. Special Character (*)
regex = new RegExp(/ahmed[0-9]*faraz/g); // character set before * can repeat either 0 or infinite times
string = 'ahmedfaraz ahmed1 1faraz ahmed faraz ahmed1faraz ahmedofaraz ahmed_faraz ahmed@faraz';
console.log(string.match(regex));
// Output: [ 'ahmedfaraz', 'ahmed1faraz' ]

// ======================================== 7. Starting and Ending Pattern

// NOTE
// - `^` Defines start of string
// - `$` Defines end of string

// 7.1. Check for first five numbers
regex = new RegExp(/^[a-z]{5}/g); // ^ means fisrt five character
string = 'faraz12345 12345ahmed';
console.log(string.match(regex));
// Output: [ 'faraz' ]

// 7.2. Check for last five numbers
regex = new RegExp(/[a-z]{5}$/g); // $ means last five character
string = 'faraz12345 12345ahmed';
console.log(string.match(regex));
// Output: [ 'ahmed' ]

// 7.3. Go for exact five numbers
regex = new RegExp(/^[a-z]{5}$/g); // ^ & $ combined means exact five character
string = 'jupiter';
console.log(string.match(regex));
// Output: null
regex = new RegExp(/^[a-z]{5}$/g); // ^ & $ combined means exact five character
string = 'earth';
console.log(string.match(regex));
// Output: [ 'ahmed' ]
regex = new RegExp(/^[a-z]{5}$/g); // ^ & $ combined means exact five character
string = 'mars';
console.log(string.match(regex));
// Output: null

// ======================================== 8. Alternate Characters (|)

// NOTE
// - `|` works as OR operator in regex

regex = new RegExp(/a|bus/g); // matches for a or bus (Not a or b)
string = 'a bus aus';
console.log(string.match(regex));
// Output: [ 'a', 'bus', 'a' ]
regex = new RegExp(/(a|b)us/g); // Now matches for a or b
string = 'a bus aus';
console.log(string.match(regex));
// Output: [ 'bus', 'aus' ]
regex = new RegExp(/g(l|r)ow/g); // same as above matches for `l` or `r`
string = 'grow glow glrow grlow';
console.log(string.match(regex));
// Output: [ 'grow', 'glow' ]

// SOME ACTIVITY
regex = new RegExp(/(english|chinese|spanish) language/g); // same as above matches for different languages with letter language
string = 'english chinese spanish';
console.log(string.match(regex));
// Output: null
regex = new RegExp(/(english|chinese|spanish) language/g); // same as above matches for different languages with letter language
string = 'english chinese spanish language';
console.log(string.match(regex));
// Output: [ ' spanish language' ]
regex = new RegExp(/(english|chinese|spanish) language/g); // same as above matches for different languages with letter language
string = 'language english language chinese language spanish';
console.log(string.match(regex));
// Output: [ 'english language', 'chinese language' ]