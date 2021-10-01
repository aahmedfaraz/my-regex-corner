console.log('Hello Regex!');

// Let's rock ;)

// Required variables
let regex, string;

// 1. Simple Pattern

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

regex = new RegExp(/GLASS/g); // case sensitive
string = 'GLASS glass GLaSs';
console.log(string.match(regex));
// Output: [ 'GLASS' ]

regex = new RegExp(/GLASS/gi); // case insensitive
string = 'GLASS glass GLaSs';
console.log(string.match(regex));
// Output: [ 'GLASS', 'glass', 'GLaSs' ]


