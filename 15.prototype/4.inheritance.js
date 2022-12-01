// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
    this.name = name;
    this.emoji = emoji;
}

Animal.prototype.print = function () {
    console.log(`${this.name} ${this.emoji}`);
}


function Dog(name, emoji, owner) {
    Animal.call(this, name, emoji) // class에서의 super와 비슷
    this.owner = owner;
}

// 개별적인 Animal, Dog 두 생성자 함수로 만들어질 인스턴스의 프로토타입을 연결
// Dog가 Animal을 상속 받도록 연결
Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.play = () => {
    console.log('play together!');
}

const dog1 = new Dog('coco', 'big', 'jicheol')
dog1.print();
dog1.play();


function Tiger(name, emoji) {
    Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
    console.log('hunt and eat');
}
const tiger = new Tiger('yellow-tiger', 'lined-pattern');
console.log(tiger);

tiger.print();
tiger.hunt();

// 상속도 확인 방법
console.log(tiger instanceof Dog);
console.log(tiger instanceof Animal);