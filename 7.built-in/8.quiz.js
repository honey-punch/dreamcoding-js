// 1. 문자열의 모든 캐릭터를 하나씩 출력하라!
const text = 'Hello World';
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// 2. 사용자의 id를 잘라내서 각각의 id를 배열로 보관!
const ids = 'user1, user2, user3, user4';
const idsArray = ids.split(', ');
console.log(idsArray);
console.log(typeof idsArray);

// 3. 1초에 한번씩 시계를 출력해보자(날짜 포함)
setInterval(log, 1000)

function log() {
  console.log(new Date);
}