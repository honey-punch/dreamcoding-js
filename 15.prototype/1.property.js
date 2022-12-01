const dog = {
    name: 'wow',
    emoji: 'krrrrrrr',
}
// Object.keys()
// 인자로 전달된 객체의 키, 값에 대한 정보를 배열로
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

// 객체 안에 특정한 키가 있는지 확인
console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 '프로퍼티 디스크립터'라고 하는 객체로 저장됨
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);
Object.defineProperty(dog, 'name', {
    value: 'eeeeeee',
    writable: false, // 값 수정 가능여부
    enumerable: false, // 열거 가능여부
    configurable: false, // 키 수정 가능여부
});
console.log(dog.name); // 위에서 수정한대로 바뀜
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));
delete dog.name;
console.log(dog.name);

const student = {};
Object.defineProperties(student, {
    firstName: {
        value: 'jicheol',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: 'jang',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    fullName: {
        get fullName () {
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(name) {
            [this.lastName, this.firstName] = name.split('   ')
        },
        configurable: true
    },
});
console.log(student);