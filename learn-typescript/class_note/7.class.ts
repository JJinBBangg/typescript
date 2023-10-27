// ES2015 (ES6)
class Person123{
    // 클래스 로직
    private name: string
    public age: number
    readonly log: string
    //1. 초기화 
    constructor(name: string, age: number){
        console.log("생성되었습니다.")
        this.name = name;
        this.age = age;
    }

}
//생성될 때 최초한번 constructor() 실행됨(JAVA 기본생성자와 같음)
//var jin = new Person();
var jin21 = new Person123("kookjin", 30);

console.log(jin21)
