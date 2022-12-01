// 조건문
// switch
// 정해진 범위안의 값에 대해 특정한 일을 해야하는 경우
let day = 10; // 0:월, 1:화 ... 6:일
let dayName;

switch(day) {
  case 0:
    dayName = '월';
    break;
  case 1:
    dayName = '화';
    break;
  case 2:
    dayName = '수';
    break;
  case 3:
    dayName = '목';
    break;
  case 4:
    dayName = '금';
    break;
  case 5:
    dayName = '토';
    break;
  case 6:
    dayName = '일';
    break;
  default:
    dayName = '해당하는 요일이 없셈'
}
console.log(dayName);
// 주의점! break를 사용하지 않으면 마지막 코드가 실행됨

let condition = 'good'; // okay, good -> 좋음 / bad -> 나쁨
let text;
switch (condition) {
  case 'okay':
  case 'good' :
    text = '좋음!';
    break;
  case 'bad' :
    text = '나쁨!';
    break;
}
console.log(text);