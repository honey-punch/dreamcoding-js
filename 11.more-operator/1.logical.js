// 논리연산자
// && 그리고
// || 또는
// 단축평가
const obj1 = {name: 'dog'};
const obj2 = {name: 'cat', owner: 'jicheol'};

if (obj1 || obj2) { // 조건문 안에서는 boolean값으로 평가됨
    console.log('both true!');
}

let result = obj1 && obj2; // 첫 번째 오브젝트가 true면 두번째 오브젝트가 할당됨
console.log(result);

result = obj1 || obj2; // 첫 번째 오브젝트가 true면 첫번째 오브젝트가 할당됨
console.log(result);

// 활용예

function change(obj) {
    if (!obj.owner) {
        throw new Error('owner 없샘');
    }
    obj.owner = 'bob';
}
function make(obj) {
    if (obj.owner) {
        throw new Error('owner 잇샘');
    }
    obj.owner = 'new bob';
}

// 1. 조건이 truthy일때 && 무언가를 해야 할 경우
// && 앞이 true라면 뒤 실행, 앞이 false라면 false반환
obj1.owner && change(obj1);
obj2.owner && change(obj2);
console.log(obj1);
console.log(obj2);

// 2. 조건이 falshy일때 || 무언가를 해야 할 경우
// || 앞이 true라면 true반환, 앞이 false라면 뒤 실행
obj1.owner || make(obj1);
obj2.owner || make(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할때
let item = {price: 1};
const price = item && item.price;
console.log(price);

// 기본값을 설정할때 사용
// default parameter를 전달하지 않거나, undefined 설정
// || 값이 falshy한 경우 설정: 0, -0, null, undefined, ''
function print(e) {
    const text = e || 'hello';
    console.log(text);
};
print();