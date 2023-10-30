interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}
// 상품 목록을 받아오기위한 API
function fetchProduct(): Promise<Product[]> {
  const item: Product[] = [
    {
      id: 1,
      name: "string",
      price: 100,
      brand: "string",
      stock: 1000,
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(item), 2000);
  });
}
// interface productDetail {
//   id: number;
//   name: string;
//   price: number;
// }
//유틸리티 함수의 리턴값은 type
type productItem = Pick<Product, "id" | "name" | "price">; // property를 직접지정
type productItem1 = Partial<Product>; // 모든요소가 선택적으로 사용될 수 있음
type productItem2 = Omit<Product, "id" | "name" | "price">;
// property 중 제외될 항목을 입력 "brand"와 "stock"만 사용할 수 있음

function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {
  return;
}
// interface UpdateProduct {
//   id?: number | undefined;
//   name?: string | undefined;
//   price?: number | undefined;
//   brand?: string | undefined;
//   stock?: number | undefined;
// }
type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: UpdateProduct) {}

interface UserProfile {
  username: string;
  email: string;
  profilePhotoURL: string;
}

// interface UpdateUserProfile{
//     username ?: string;
//     email ?: string;
//     profilePhotoURL ?: string;
// }

// type UpdateUserProfile = Partial<UserProfile>;
// #1
// type UpdateUserProfile = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoURL?: UserProfile['profilePhotoURL'];
// };

// #2
// type UpdateUserProfile = {
//   [p in "username" | "email" | "profilePhotoURL"]?: UserProfile[p];
// };

// #3
// type keyofUserProfile = keyof UserProfile;
type UpdateUserProfile = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// #4 Mapped type최종구현체
type Subset<T> = {
  [P in keyof T]?: T[P];
};
