function logMessage(value: string | number) {
    console.log(value)
}

logMessage('string');
logMessage(123);

interface Person {
    name: string,
    skill: string
}
interface Developer{
    name: string,
    age: number
}
// union type 공통된 속성만 사용가능 name
function askSomeone(someone: Person | Developer) {
    someone.name;
    // someone.skill;
    // someone.age;
}
//함수를 사용할 때에는 Person 또는 Developer 타입으로 입력가능
// askSomeone({name: '123', skill:'123'});
askSomeone({name: '', age:3});

// intersection type 포함되어있는 모든 속성 사용하는 타입
function askSomeone1(someone: Person & Developer) {
    someone.name;
    someone.skill;
    someone.age;
}
// 함수로 사용 시 Person과 Developer의 모든 사항을 포함하는 
// 새로운 타입이 만들어진것으로 보아야함
askSomeone1({name:'', skill:'',age:3})