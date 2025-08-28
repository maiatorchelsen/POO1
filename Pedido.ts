import { Cliente } from "./Clientes";
import { Produto } from "./Produtos";


export class Pedido {
    cliente: string;
    produto: string;
    quantidade: number;
    
    constructor(Cliente: Cliente, Produto: Produto) {
        this.cliente = "";
        this.produto = "";
        this.quantidade = 0;
    }
    
    criarPedido(cliente: string, produto: string, quantidade: number): Pedido {
        this.cliente = cliente;
        this.produto = produto;
        this.quantidade = quantidade;
    
        return this;
    }
}