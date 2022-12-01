const x = 0;
const y = 0;
// const coordinate = {x: x, y: y};
// key와 value로 받는 변수명이 같다면 밑처럼 생략 가능
const coordinate = {x, y};
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age, // 객체를 만드는 함수에서도 적용 가능
  }
}