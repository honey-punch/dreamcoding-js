// 정직원, 파트타임직원 클래스
// 직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 직원들의 정보를 이용해 한달 월급 계산
// 정직원은 시간당 10,000원
// 파트타임직원은 시간당 8,000원
class Worker {
  constructor(name, part, workTime, payRate) {
    this.name = name;
    this.part = part;
    this.workTime = workTime;
    this.payRate = payRate;
  }

  calculatePay = () => {
    console.log(this.payRate * this.workTime);
  }
}

class FullTimeWorker extends Worker {
  static PAY_RATE = 10000;

  constructor(name, part, workTime, payRate) {
    super(name, part, workTime, FullTimeWorker.PAY_RATE)
  }
}

class partTimeWorker extends Worker {
  static PAY_RATE = 8000;

  constructor(name, part, workTime, payRate) {
    super(name, part, workTime, partTimeWorker.PAY_RATE)
  }
}

const a = new FullTimeWorker('장지철', 'FE', 30);
const b = new partTimeWorker('밥팤', 'BE', 20);

console.log(a);
console.log(b);
a.calculatePay();
b.calculatePay();