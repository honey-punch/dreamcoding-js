// 산술연산자
// +
// -
// *
// /
// % 나머지값
// ** 지수(거듭제곱)

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); // es7
console.log(Math.pow(5, 2)); // es7 이전

// + 연산자 주의점!
let text = '두개의' + '문자열';
console.log(text);
text = '1' + 1; // 숫자와 문자열을 더하면 '문자열'로 반환됨
console.log(text);
