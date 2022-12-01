// 주석
// 한줄 짜리 주석 작성할 때
// TODO(이름) : 해야할 일을 작성
// TODO(지철) : xx기능 구현하기!

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(why), 어떻게(how)를 설명하는 것이 좋음
 * 정말 필요한 경우에만!
 */

// 외부에서 많이 쓰이는 함수 API인 경우 JSDOC을 사용하는게 좋음
// 함수 코드 바로 위에서 /** 엔터키!
/**
 * 주어진 두 인자를 더한 값을 반환함
 * @param {*} a 숫자1
 * @param {*} b 숫자2
 * @returns a와 b를 더한 값
 */
function add(a, b) {
  return a + b;
}
[].map