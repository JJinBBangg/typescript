// 함수의 파라미터 타입 정의
function sum(a: number, b: number): number {
  return a + b;
}

//함수의 반환값에 타입 정의
// function add():number{
//     return 1;
// }

// sum(10, 20, 30); //파라미터 타입뿐만아니라 갯수도 정확하게 맞아야함

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {
  console.log(a + b + c);
}
log("hi");
log("hello", "bye", "ts");
