// 접근제어자
// 만들어진 인스턴스의 값을 바꿀수 없게 만들어주는 것(캡슐화)
// #을 붙이면 됨
// private(#), public(기본), protected
class Fruit {
  #name; // constructor에서 주어지는 데이터라면 생략 가능
  #emoji; // constructor에서 주어지는 데이터라면 생략 가능
  #type = '과일'; // 필드!
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  #display = () => {
    console.log(`${this.#name} ${this.#emoji}`);
  }
}

const apple = new Fruit('apple', '🍍');
// apple.#name = 'a'; // #field는 외부에서 접근 불가
console.log(apple);