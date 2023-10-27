// function logText(text) {
//     console.log(text)
//     return text
// } 

// logText(10);
// logText('hi');
// logText(true);

// function logText1<T>(text: T): T{
//     console.log(text)
//     return text;
// }

// logText1(10); // 추론으로 10의 타입을 엔진이 정함
// logText1<string>('10'); // string 으로 타입을 지정

// function logText2(text: string ){
//     console.log(text)
//     text.split("").reverse().join("");
//     return text;
// }
// logText2("a");
// // logText2(10);
// // logText2(true);

// function logNumber(num: number ){
//     console.log(num)
//     return num;
// }

// function logText(text: string | number) {
//     console.log(text)
//     // text.split() // number 타입으로 입력시 오류라 사용불가 string 관련 함수사용불가
//     return text;
// }

// var str = logText("a"); // str의 타입은 string 으로 되는 것이 아닌 string | number
// // str.split(); // 타입오류로 사용불가
// logText(10);

function logText<T>(text: T): T {
    console.log(text)
    return text;
}
var str = logText<string>('a')
str.split("").reverse().join(""); //사용가능
var num = logText<number>(10);
num.toLocaleString(); // 사용가능

//interface에 제네릭을 사용하는방법
interface Dropdown<T>{
    value : T,
    selected : boolean
}
const obj: Dropdown<string> = {
    value: '123',
    selected: true
}

// generic의 타입제한 1
function logTextLength<T>(text: T[]): T[]{ // 타입을 배열로 제한
    console.log(text.length)
    return text;
}
// logTextLength<string>(["string", 10]) // 배열로 선언하고 string 의 배열만들어올수 있음

// generric의 타입제한 2
interface LengthTpye{
    length : number
}
function logTextLength1<T extends LengthTpye>(text: T): T{
    text.length
    return text;
}
logTextLength1("123"); // string 타입에는 length가 정의되어있어서 사용가능
logTextLength1([3,4,5]) // Array타입에도 length가 정의되어있음
// logTextLength1({lent: '2'}) // length 라는 속성이 정의되지않음
logTextLength1({length: 3}) // length속성값을 직접 입력해도 사용가능
// logTextLength1(10) // number 타입에는 length가 정의 되어있지 않음

interface ShoppingItem{
    name: string,
    price: number,
    stock: number
}

//generic의 타입 제한 3 keyof
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
}
// getShoppingItemOption(10);
getShoppingItemOption("name");