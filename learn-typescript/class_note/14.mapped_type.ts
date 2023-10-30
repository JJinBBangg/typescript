type Heroes = "Hulk" | "Thor" | "Capt";
type HeroAges = {
  [P in Heroes]: number;
};
const ages: HeroAges = {
  Capt: 33,
  Hulk: 44,
  Thor: 55,
};

// for in 반복문코드
// var arr = ['a', 'b', 'c']
// for(var key in arr){
//  console.log(arr[key])
// }
