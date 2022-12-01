const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

// if (num === Number.NaN) {
  
// }
// if (Number.isNaN(num1)) {
  
// }

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
// 지수표기법으로 바꿔주는 함수
console.log(num3.toExponential());

// 반올림해서 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

// 문자열로 반환
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(2));

// 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
console.log(Number.EPSILON);

const num = 0.1 + 0.2 - 0.2;
console.log(num); // 2진수로 연산후 다시 10진수로 변환할때 부동소수점까지 연산 x

function isEqual(original, expected) {
  // return original === expected;
  return original - expected < Number.EPSILON;
}
console.log(isEqual(1, 1));
console.log(isEqual(num, 0.1));
