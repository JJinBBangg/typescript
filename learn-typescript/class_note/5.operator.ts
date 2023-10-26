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
