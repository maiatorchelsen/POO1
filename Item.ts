import { Cliente } from "./Clientes";

export class Item {
  nome: string;
  preco: number;

  constructor() {
    this.nome = "";
    this.preco = 0;
  }

  criarProduto(nome: string, preco: number): Item {
    this.nome = nome;
    this.preco = preco;

    return this;
  }
}
//exibir detalhes do produto