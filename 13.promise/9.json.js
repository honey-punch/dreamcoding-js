// javascript object notation
// 서버와 클라이언트 간의 http 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object) : JSON
// parse(JSON) : object
const jicheol = {
  name: 'jicheol',
  age: 31,
  eat: () => {
    console.log('eat');
  },
}

// 직렬화 serializing : 객체를 문자열로 반환
const json = JSON.stringify(jicheol);
console.log(jicheol);
console.log(json);

// 역직렬화 deserializing : 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj);