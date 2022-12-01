// 접근자 프로퍼티
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() { // 메서드를 프로퍼티처럼 받아옴
    return `${this.lastName} ${this.firstName}`
  }

  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName); // 접근할때는 get
student.fullName = '김철수'; // 할당할때는 set