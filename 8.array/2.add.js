const fruits = ['๐', '๐', '๐', '๐'];

// ๋ฐฐ์ด ์์ดํ์ ์ฐธ์กฐํ๋ ๋ฐฉ๋ฒ;
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ์ถ๊ฐ, ์ญ์  - ์ข์ง ์์ ๋ฐฉ์ ๐ฉ
// ์ซ์๋ฅผ ์๋ชป ์๋ ฅํ๋ฉด ๋ฎ์ด์์์ง๊ฑฐ๋ ์ค๊ฐ์ ๊ณต๋ฐฑ์ด ์๊น
fruits[4] = 'โญ๏ธ';
console.log(fruits);
// ์ญ์ ๋ ๋ถ๋ถ์ด ๊ณต๋ฐฑ์ผ๋ก ๋จ์์์
delete fruits[1];
console.log(fruits);