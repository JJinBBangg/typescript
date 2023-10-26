function logText(text) {
    console.log(text)
    return text
} 

logText(10);
logText('hi');
logText(true);

function logText1<T>(text: T): T{
    console.log(text)
    return text;
}

logText1(10); // 추론으로 10의 타입을 엔진이 정함
logText1<string>('10'); // string 으로 타입을 지정
