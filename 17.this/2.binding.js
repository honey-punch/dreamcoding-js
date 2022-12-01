// this 바인딩
// 자바, C#, C++ 등 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스를 가리킴
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨
// 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 결정됨
// 즉, this는 호출하는 caller에 따라 동적으로 결정됨
function Cat(name) {
    this.name = name;
    this.print = function () {
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