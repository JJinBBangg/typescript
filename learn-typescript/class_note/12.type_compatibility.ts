//interface 
interface Developer1{
    name: string;
    skill: string;
}

// interface Person1{
//     name: string;
// }
var developer: Developer1 = {name: "john", skill:"java"};
var person: Person1 = {name: "jin"};
// developer = person;
// person = developer;
class Person1{
    name: string;
}
// developer = new Person1();
// typescript 에서 타입을 비교할 떄 class, interface 등 구조를따지는것이아니라
// 구성하는 property와 그 property의 type값을 비교한다

// 함수
var add = (a: number)=>{
    console.log(a)
    return a;
}

var sum = (a:number, b:number) => {
    console.log(a+b)
    return a+b;
}

// add = sum;
sum = add;


//generic

interface Empty<T>{

}
var empty1: Empty<string> = {};
var empty2: Empty<number> = {};
empty1 = empty2;
empty2 = empty1;
interface NotEmpty<T>{
    data : T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
//위처럼 입력 시 data의 타입이 다르게 지정이 되어버린것이기때문에 = 사용불가 

