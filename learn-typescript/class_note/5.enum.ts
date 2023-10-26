//숫자형 enum
enum Shose{ 
    Nike, // 숫자지정시 지정된 숫자로부터 1씩 증가하는 값을 가지게됨
    Adidas,
}

var MyShose = Shose.Adidas;
console.log(Shose.Nike) // 0;
console.log(MyShose); // 1;
//별도의 값을 지정하지 않으면 index값으로 표현됨


// 문자형 enum
enum Shose1{ 
    Nike = '나이키', // 숫자지정시 지정된 숫자로부터 1씩 증가하는 값을 가지게됨
    Adidas = '아디다스',
}


//예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer ){
    // if(answer === 'Y'){ // 이넘에 포함되어있는 문자열과 동일하면 사용은 가능함
    if(answer === Answer.Yes){
        console.log("정답입니다.")
    }
    if(answer === Answer.No){
        console.log("오답입니다.")
    }
}
askQuestion(Answer.Yes);
// askQuestion('Y');  // if문안에서 enum과 비교시에는 문자열이 동일해도 사용불가
