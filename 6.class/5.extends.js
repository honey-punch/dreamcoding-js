// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('eat!!');
//   }
//   sleep() {
//     console.log('sleep!!');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('eat!!');
//   }
//   sleep() {
//     console.log('sleep!!');
//   }
//   play() {
//     console.log('play!!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('eat!!');
  }
  sleep() {
    console.log('sleep!!');
  }
}

class Tiger extends Animal {

}
const tiger = new Tiger('yellow');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // 부모클래스 상속
    this.ownerName = ownerName;
  }
  play() {
    console.log('play!!');
  }

  // 오버라이딩 
  // 메서드는 걍 덮어 써짐
  eat() {
    super.eat(); // 부모클래스의 메서드 상속
    console.log('dog eat!!');
  } 
}
const dog = new Dog('red', 'me');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();