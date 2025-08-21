import { Cliente } from "./Clientes";

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
