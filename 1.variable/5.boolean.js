// 참과 거짓
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용 예
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isFree);
console.log(isActivated);
console.log(isEnrolled);

console.clear();

// falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);