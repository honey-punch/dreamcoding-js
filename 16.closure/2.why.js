// 내부정보를 은닉하고, 공개함수를 통한 데이터 조작을 위해 쓰임
// 캡슐화와 정보은닉을 위해 사용됨
// 클래스의 private field 또는 메서드를 사용하는 효과와 동일
function counter() {
    let count = 0;
    function increase() {
        count++;
        console.log(count);
    }
    return increase;
}
const increase = counter();
increase();
increase();
increase();
increase();

class Counter {
    #count = 0;
    increase() {
        this.#count++;
        console.log(this.#count);
    }
}
const count = new Counter();
count.increase();
count.increase();
count.increase();