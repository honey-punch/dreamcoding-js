// 증가 & 감소 연산자 increment & decrement
let a = 0;
console.log(a);

a = a + 1;
console.log(a);

a++; // a = a + 1
console.log(a);

a--; // a = a - 1
console.log(a);

// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함
a = 0;
let b = a++; // 필요한 연산(할당)을 먼저하고 그 뒤에 a에 증가된 값을 a에 할당
b = ++a; // a의 값을 먼저 증가시키고 필요한 연산(할당)을 함
console.log(b);
console.log(a);
