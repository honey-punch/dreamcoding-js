// 오브젝트는 단 하나의 prototype을 가리킬 수 있다(부모는 단 하나)
// 하지만! 여러 함수들을 상속하고 싶을때!
// Mixin!
// 1. 생성자 함수에 다른 객체들을 mixin
const play = {
    play: function () {
        console.log(`${this.name} play!`);
    },
}

const sleep = {
    sleep: function () {
        console.log(`${this.name} sleep!`);
    }
}

function Dog(name) {
    this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('walwal');
console.log(dog);
dog.play();
dog.sleep();

// 2. 클래스에 다른 객체들을 mixin
class Animal {}
class Tiger extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
}
Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('black');
console.log(tiger);
tiger.play();
tiger.sleep();