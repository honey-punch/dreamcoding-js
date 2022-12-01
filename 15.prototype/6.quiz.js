class Animal {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    print() {
        console.log(`${this.name} ${this.emoji}`);
    }
}

class Dog extends Animal {
    constructor(name, emoji, owner) {
        super(name, emoji);
        this.owner = owner;
    }
    play() {
        console.log(`${this.owner}! ${this.name}와(과) 놀아줭`);
    }
}
class Tiger extends Animal {
    constructor(name, emoji) {
        super(name, emoji);
    }
    hunt() {
        console.log(`${this.name}은 사냥한다`);
    }
}

const dog = new Dog('coco', 'black', 'jicheol');
console.log(dog);
dog.print();
dog.play();

const tiger = new Tiger('krrrrr', 'yellow');
console.log(tiger);
tiger.print();
tiger.hunt();

console.log(tiger instanceof Dog);
console.log(tiger instanceof Animal);