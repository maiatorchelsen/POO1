import {fakerPT_BR as faker} from '@faker-js/faker';
import { Cliente } from "./Clientes";
import { Item } from "./Item";
import { Util } from './Util';


export class Pedido {
    cliente: string;
    itens: Item[];
    quantidade: number;
    status: string;
    numeroPedido: string;
    
    constructor(Cliente: Cliente, Produto: Item) {
        this.cliente = "";
        this.itens = [];
        this.quantidade = 0;
        this.status = "Pendente";
        this.numeroPedido = Util.gerarNumeroDePedido();
    }
    
    criarPedido(cliente: string, item: Item, quantidade: number): Pedido {
        this.cliente = cliente;
        this.itens.push(item);
        this.quantidade = quantidade;
    
    
        return this;
    }
    cancelarPedido(): void {
        this.status = "Cancelado";
    }
    adicionarItem(produto: Item) {
        this.itens.push(produto);
    
    }
    
}