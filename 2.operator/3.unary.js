// 단항연산자
// + (양)
// - (음)
// ! (부정)
let a = 5;
console.log(a);
a = -a;
console.log(a); // -5
a = -a;
console.log(a); // 5

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

console.clear();

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있음
console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+'text');
console.log(+undefined);

// !! 값을 boolean값으로 변환
console.log(!!1);