// 카운터 만들기
// 0이상의 값으로 초기화 한뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기
// Counter 클래스
class Counter {
  constructor(startValue) {
    if (startValue == NaN || startValue < 0) {
      this.startValue = 0;
    } else {
      this.startValue = startValue;
    }
  }

  incresment = () => {
    this.startValue++;
    console.log(this.startValue);
  }
}

const counter = new Counter(-1);
console.log(counter);
counter.incresment();
counter.incresment();
counter.incresment();
counter.incresment();
