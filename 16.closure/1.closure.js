// closure
// 함수, 렉시컬 환경의 조합
// 내부 함수에서 외부 함수에 있는 상태에 접근할 수 있는 권한을 주는 것
const text = 'hello';
function func() {
    console.log(text);
}
func();

function outer() {
    const x = 0;
    function inner() {
        console.log(`inside inner ${x}`);
    }
    return inner;
}
const func1 = outer();
func1();