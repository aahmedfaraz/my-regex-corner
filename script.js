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

