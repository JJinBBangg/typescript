//ES5이전
//함수 선언문
function sum(a, b) {
  return a + b;
}
//함수 표현식
var sum = function (a, b) {
  return a + b;
};
//ES6이후
// 화살표 함수
var sum = (a, b) => {
  return a + b;
};
var sum = (a, b) => a + b;
//TS에서의 화살표함수
var sum = (a: number, b: number): number => {
  return a + b;
};
