// 퀴즈
let num = 2;
// num이 짝수면 👍, 홀수면 👎 출력
// if
if(num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}

// ternary
num % 2 === 0 ? console.log('👍') : console.log('👎');

// 삼항연산자 더 깔끔하게
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);
