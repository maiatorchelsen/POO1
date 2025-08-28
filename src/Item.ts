import {fakerPT_BR as faker} from '@faker-js/faker';
import { Cliente } from "./Clientes";
import { Pedido } from "./Pedido";

export class Item {
  nome: string;
  preco: number;
  categoria: string;
  codigo: string;

  constructor() {
    this.nome = "";
    this.preco = 0;
    this.categoria = "";
    this.codigo = "";
  }

  criarProduto(nome: string, preco: number): Item {
    this.nome = nome;
    this.preco = preco;

    return this;
  }
  detalhesItem(): string {
    return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`;
  }
  descontoAplicado(percentual: number): number {
    
    const desconto = (this.preco * percentual) / 100;
    const precoComDesconto = this.preco - desconto;
    return (precoComDesconto);
  }
}
