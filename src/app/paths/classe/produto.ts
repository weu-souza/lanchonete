export class Produto {
  id: number;
  nome: string;
  imagem: string;
}

export class Carrinho implements Ingrediente {
  id: number;
  imagem: string;
  ingrediente: string;
  nome: string;
  preco: number;

}

export interface Ingrediente {
  id: number;
  nome: string;
  imagem: string;
  preco: number;
  ingrediente: string;
}

export class Promocao {
  id: number;
  nome: string;
  imagem: string;
  preco: number;
  detalhe: string;
}

export const Produtos: Ingrediente[] = [
  {
    id: 1,
    nome: 'hamburguer',
    imagem: 'assets/img/hamburguer.jpg',
    preco: 25,
    ingrediente: 'pão, carne, queijo, alface,tomate.'
  },
  {
    id: 2,
    nome: 'pizza',
    imagem: 'assets/img/pizza.jpeg',
    preco: 30,
    ingrediente: 'pão, carne, batata, alface,tomate.'
  },
  {
    id: 3,
    nome: 'refrigerante',
    imagem: 'assets/img/Refrigerentes.webp',
    preco: 30,
    ingrediente: 'refrigerantes latas e 2 litros'
  }
];
export const ProdutosLista: Produto[] = [
  {id: 1, nome: 'hamburguer', imagem: 'assets/img/hamburguer.jpg'},
  {id: 2, nome: 'pizza', imagem: 'assets/img/pizza.jpeg'},
  {id: 3, nome: 'refrigerante', imagem: 'assets/img/Refrigerentes.webp'},
];
export const Promocoes: Promocao[] = [
  {id: 1, nome: 'Combo 1', imagem: 'assets/img/combopizzarefri.webp', preco: 60, detalhe: '2 pizza com um refrigerante 2 litros.'},
  {id: 2, nome: 'Combo 2', imagem: 'assets/img/comboBatataHamburguer.jpeg', preco: 40, detalhe: '4 hamburguer com batata.'},
  {id: 3, nome: 'Combo 3', imagem: 'assets/img/comboHamburguer.png', preco: 20, detalhe: 'hamburguer com refrigerante e batata.'}
];




