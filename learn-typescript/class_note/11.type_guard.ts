interface Person{
    name: string;
    age: number;
}
interface Developer{
    name: string;
    skill: string;
}
interface User{
    name: string;
    id: string;
}
function introduce(): Developer | Person {
    return {name:"tony", skill:"java", age:30}
}
var tony = introduce();
console.log(tony.name); // 유니온타입 사용 시 공통되는 값에만 접근할 수 있음

// if((tony as Developer).skill){
//     var skill = (tony as Developer).skill
//     console.log(skill)
// } else if((tony as Person).age){
//     var age = (tony as Person).age
//     console.log(age)
// }
// 타입 가드 정의
function isDeveloper (target: Developer| Person): target is Developer{ // 반환타입 boolean
    return (target as Developer).skill != 'undefined';
}

if(isDeveloper(tony)){
    console.log(tony.skill); // skill에 바로접근가능
} else {
    console.log(tony.age); // age에 바로 접근가능(비교대상 developer Person)
}