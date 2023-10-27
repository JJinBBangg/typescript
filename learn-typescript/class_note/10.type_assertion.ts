// 타입 단언(type assertion)
var ab;
ab = 12;
ab = "12"
var b = ab as string; // 타입단언


//DOM API 조작 타입단언사용
// <div id="app">hi</div> 
var div = document.querySelector('div'); // querySelector 내부에 타입이 정의되어있음
div?.innerText; // ?.사용할 수도 있음
if(div)div.innerText // 있는지 확인하고 사용할 수 있음

//단언사용 시 확인 하지않고 사용할 수 있음
var app = document.querySelector(".container") as HTMLDivElement;
app.innerText; // null값을 단언한 타입으로 정해줘서 null체크없이 사용가능





