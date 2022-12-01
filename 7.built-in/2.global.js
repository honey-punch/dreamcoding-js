console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// 문자열을 코드로 평가해서 실행
eval('const num = 2; console.log(num)');

console.log(isFinite(1));
console.log(isFinite(Infinity));

// 문자열을 숫자로
console.log(parseFloat('12.43'));
// 문자열을 숫자(정수)로
console.log(parseInt('12.43'));

// URL
// 아스키 문자로만 구성되어야함
// 한글, 특수문자는 이스케이프 처리해야함
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);
const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 컴포넌트 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));