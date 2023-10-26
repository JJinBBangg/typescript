interface User{
    age: number;
    name: string;
}
//변수에 활용한 interface
var Seho: User;

//함수에 활용한 interface
function getUser(user: User){
    console.log(user)
}
var capt = {
    age : 1,
    name : "캡틴"
}
getUser(capt);

//함수의 스팩에 interface 적용
interface SumFunction{
    (a:number, b:number): number
}
// function sum(a, b){
//     return a+b;
// }
var sum: SumFunction;
sum = function(a:number, b:number){
return a + b;
}

//인덱싱 타입 정의
interface StringArray{
    [index: number]: string
}
var arr1: StringArray = ['a', 'b', 'c'];
arr1[0] = "string" // 

interface StringRegexDictionary{
    [key: string]: RegExp
}
var obj1: StringRegexDictionary = {
    // sth : /abc/,
    cssFile : /\.css$/,
    jsFile : /\.js$/,
}
Object.keys(obj1).forEach((value)=>{console.log(value)})
// obj1['cssFile'] = "d" // 타입체크

interface Person12 {
    name: string,
    age: number
}
interface Developer1 extends Person12{
    // name: number,// 오버라이딩 안됨(커스텀할 수 없음) 타입 규제받음
    age: number,  // 명시해줄 수도 있고 안해줘도 상속받아 사용가능
    language: string
}
// interface Developer extends Person{
//     language: string
// }
var user12:Developer1 = {
    name: '',
    age: 2,
    language: ''
}
