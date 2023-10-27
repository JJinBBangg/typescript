// enum Value{
//   Email = string,
//   ProductNum = number
// }
interface DropdwonItem<T>{
  value : T,
  selected : boolean
}

// interface Email{
//   value: string, 
//   selected: boolean
// }
// interface ProductNum{
//   value: number, 
//   selected: boolean
// }

const emails: DropdwonItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts:DropdwonItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: DropdwonItem<string | number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  if(selectTag)selectTag.appendChild(item);
});