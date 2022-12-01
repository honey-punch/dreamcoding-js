const textObj = new String('hi');
const text = 'hi!';

console.log(textObj);
console.log(text);

console.log(text.length);
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('!'));
console.log(text.lastIndexOf('!'));

console.log(text.includes('w'));
console.log(text.includes('h'));

console.log(text.startsWith('h'));
console.log(text.startsWith('n'));
console.log(text.endsWith('!'));
console.log(text.endsWith('n'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));

const space = '            space     ';
console.log(space.trim());

const long = 'get start'
console.log(long.split(' '));
console.log(long.split(' ', 1));