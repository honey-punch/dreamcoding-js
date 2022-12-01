// typeof 데이터 타입을 확인
// 값을 타입문자열로 반환
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123;
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

// js에서는 동적으로, 실행될때 할당된 값에따라 타입이 결정됨
// dynamic, weakly typed
