// UTC기준(1970년 1월 1일 utc 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('Jun 5, 2024'));

console.log(Date.now());
console.log(Date.parse('2022-12-17'));

const now = new Date();
console.log(now.setFullYear(2023));
console.log(now.setMonth(0)); // 1월
console.log(now.getDay(0)); // 일요일
console.log(now.getTime());

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString('es-US'));
console.log(now.toLocaleString('ko-KR'));