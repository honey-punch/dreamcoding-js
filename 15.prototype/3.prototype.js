// const dog1 = {name: 'doggy', emoji: 'small'};
// const dog2 = {name: 'coco', emoji: 'big'};

function Dog(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    // // 인스턴스 레벨의 함수는 만들어진 인스턴스 갯수만큼 생성이 되기 때문에 메모리 낭비
    // // 프로토타입 레벨의 함수를 만드는게 경제적
    // this.print = () => {
    //     console.log(`${this.name} ${this.emoji}`);
    // }
    
    // 프로토타입 레벨의 함수
    Dog.prototype.print = function () {
        console.log(`${this.name} ${this.emoji}`);
    }
}

const dog1 = new Dog('doggy', 'small');
const dog2 = new Dog('coco', 'big');

console.log(dog1);
console.log(dog2);
dog1.print();
dog2.print();

// 오버라이딩
// 인스턴스 레벨에서 동일한 이름으로 함수를 재정의 하면(오버라이딩)
// 프로토타입 레벨(부모)의 함수의 프로퍼티는 가려짐(섀도잉 됨)
dog1.print = function () {
    console.log('hi!');
}
dog1.print();
console.log(dog1);

// 정적 레벨
Dog.hello = () => {
    console.log('hello');
}
Dog.hello();
Dog.MAX_AGE = 20;
console.log(Dog.MAX_AGE);
console.log(dog1);