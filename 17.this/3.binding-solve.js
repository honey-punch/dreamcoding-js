// js에서 정적으로 바인딩하는 방법
function Cat(name) {
    this.name = name;
    // this.print = function () {
    //     console.log(`고양이의 이름을 출력한다 ${this.name}`);
    // };

    // 1. bind함수를 이용해 수동적으로 바인딩해주기
    // this.print = this.print.bind(this);
    // 2. 화살표함수 쓰기
    // 화살표함수는 렉시컬 환경에서의 this를 기억함
    // 화살표함수 밖에서 제일 근접한 스코프의 this를 가리킴
    this.print = () => {
        console.log(`고양이의 이름을 출력한다 ${this.name}`);
    };
}

function Dog(name) {
    this.name = name;
    this.print = function () {
        console.log(`강아지의 이름을 출력한다 ${this.name}`);
    };
}

const cat = new Cat('nyaaa');
const dog = new Dog('krrrr');
cat.print();
dog.print();

dog.print = cat.print;
dog.print(); // cat의 print함수가 할당되었으나 dog에서 호출되었으니 dog의 name이 출력됨

function printOn(print) {
    console.log(`모니터를 준비하고, 전달된 콜백을 실행`);
    print();
}
printOn(cat.print);