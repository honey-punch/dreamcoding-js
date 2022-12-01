let string = '안녕';
console.log(string);

string = `안녕하세요`;
console.log(string);

// 특수문자 출력하는 법
string = '"안녕!"';
console.log(string);

string = '안녕!\n난 지철이야\t\t너는?\\\u09ac'; // 순서대로 줄바꿈, 탭, 백슬래쉐, 유니코드 출력하는 법
console.log(string);

// 템플릿 리터럴
let id = '지철';
let greetings = "'안녕!, " + id +"😀\n즐거운하루 보내요!'"
console.log(greetings);
// 이걸 템플릿 리터럴을 이용해 간단하게
greetings = `'안녕!, ${id}🙃
즐거운 하루 보내요!'`
console.log(greetings);