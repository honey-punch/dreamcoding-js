// 주어진 seconds가 지나면 callback을 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  if (!seconds || seconds < 0) {
    throw new Error('0이상의 숫자를 인자로 전달 해주십시오 휴먼.');
  } else {
    setTimeout(callback, seconds * 1000)
  }
}

function print() {
  console.log('print!!');
}

try {
  runInDelay(print, -1);
} catch (error) {
  
}