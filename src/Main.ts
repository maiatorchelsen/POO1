import { Cliente } from "./Clientes";
import { Item } from "./Item";
import { Pedido } from "./Pedido";

function criarClientes(nome: string, telefone: string): Cliente {
    const cliente = new Cliente();
    cliente.criarClientes(nome, telefone);
    
    return cliente;
  
}
const clientes: Cliente[] = [];
clientes.push(criarClientes("João", "987654321"));
clientes.push(criarClientes("Maria", "123456789"));

//const cli1: Cliente = criarClientes("João", "987654321"); esse modo é mais verboso
//const cli2: Cliente = criarClientes("Maria", "123456789");

console.table(clientes);

function criarProduto(nome: string, preco: number): Item {
    const produto = new Item();
    produto.criarProduto(nome, preco);
    
    return produto;
  
}
function criarPedido(cliente: string, produto: Item, quantidade: number): Pedido {
    const pedido = new Pedido(new Cliente(), new Item());
    pedido.criarPedido(cliente, produto, quantidade);
    
    return pedido;
  
}