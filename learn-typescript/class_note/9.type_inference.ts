// 타입 추론 기본1
var a = 'abc';

function getB(b = 10){ // 초기값 설정 이후 함수사용시 입력되는값으로 대체됨
    var c = 'abc';
    return b + c;
}
// 타입 추론 기본2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// var shoppingItem:Dropdown<string> ={
//     value: '',
//     title: '' 
// } 
// 타입 추론 기본 3

interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K>{
    description : string;
    tag: K;
}
var detailedDropdowItem: DetailedDropdown<string> = {
    description:"",
    tag:"",
    value: "",
    title: ""
}
var detailedDropdowItem1: DetailedDropdown<number> = {
    description:"",
    tag:3,
    value: 4,
    title: ""
}


//best common type
var arr = [1,2, true, ""];

//language sever
