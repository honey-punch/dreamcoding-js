// 삼항 조건 연산자
// 조건식 ? 참인경우 : 거짓인경우
let fruit = 'apple';
if(fruit == 'apple') {
  console.log('🍊');
} else {
  console.log('❌');
}
fruit === 'apple' ? console.log('🍊') : console.log('❌');

// 할당하는 경우에도 사용 가능
let emoji = fruit === 'apple' ? '🍊' : '❌';
console.log(emoji);