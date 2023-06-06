export class Produto {
  id: number;
  nome: string;
  imagem: string;
  preco: number;
  ingrediente: string;

}

export const Produtos: Produto[] = [
  {id: 1, nome: 'hamburguer', imagem: 'assets/img/hamburguer.jpg', preco: 25, ingrediente: 'pão, carne, queijo, alface,tomate.'},
  {id: 2, nome: 'hamburguer2', imagem: 'assets/img/hamburguer.jpg', preco: 30, ingrediente: 'pão, carne, batata, alface,tomate.'},
  {id: 3, nome: 'hamburguer3', imagem: 'assets/img/hamburguer.jpg', preco: 30, ingrediente: 'pão, carne, batata, alface,beterraba.'}
];



