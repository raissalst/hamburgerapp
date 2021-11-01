export interface MenuItemFormat {
  name: string;
  section: string;
  price: number;
  img: string;
}

export interface UserLoginFormat {
  email: string;
  password: string;
}

export interface UserRegisterFormat {
  email: string;
  password: string;
  name: string;
  password_confirm: string;
}

export interface GetCartFormat {
  name: string;
  price: number;
  quantity: number;
  userId: number;
  id: number;
}
export interface AddToCartFormat {
  name: string;
  price: number;
  quantity: number;
  userId: number;
}

export interface UpdateCartFormat {
  quantity: number;
  userId: number;
}
