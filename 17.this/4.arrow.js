// 자바스크립트의 함수는 만능
// 함수처럼 사용, 생성자 함수로 사용
// 하지만, 이걸 위해서 불필요한 프로토타입이라는 무거운 오브젝트가 생김
const dog = {
    name: 'krrrr',
    play: () => {
        console.log(`let's play!!`);
    }, // 여기서 화살표 함수를 사용하면 cat의 play메서드 처럼 생성자함수로 사용이 불가능해짐
};
dog.play();
// const obj = new dog.play(); // 무거운 프로토타입 오브젝트가 생성되기 때문에 안좋음
// onsole.log(obj);

// ES6
const cat = {
    name: 'nyaaa',
    play() { // 객체의 메서드
        console.log('nyaaaaaaa~');
    },
}
cat.play();
// const obj2 = new cat.play(); // error, 생성자 함수로 사용할 수 없음

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔
 * 2. 생성자함수로 사용이 불가능(무거운 프로토타입을 만들지 않음)
 * 3. 함수 자체 arguments 객체도 없음
 * 4. this에 대한 바인딩이 정적으로 결졍됨
 *  -함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */

function add(a, b) {
    console.log(arguments);
}
add(1, 2);

const sum = (a, b) => {
    console.log(arguments); // 함수 외부의 arguments를 참조만 해서 더 가벼움
}
sum(1, 2);

const print = () => {
    console.log(this);
}
print();
cat.print = print;
cat.print();