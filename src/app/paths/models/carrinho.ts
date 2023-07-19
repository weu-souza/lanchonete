import {Usuario} from './usuario';


export class Carrinho {
  id?: number;
  name: string;
  price: number;
  imageName: string;
  ingredients: string;
  // userID: Usuario;
}

export class Tabela {
  id: number;
  userName: string;
  productName: string;
  price: number;
  total: number;
}

