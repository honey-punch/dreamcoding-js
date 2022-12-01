// 옵셔널 체이닝 연산자
// ?.
let item = {price: 1};
// const price = item && item.price; 
const price = item?.price; 
console.log(price);

let obj = {name: 'dog', owner: {name: 'jicheol'}};
function print(obj) {
    //const name = obj && obj.owner && obj.owner.name;
    const name = obj?.owner?.name;
    console.log(name);
};
print(obj);