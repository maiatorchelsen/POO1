import {fakerPT_BR as faker} from '@faker-js/faker';
import { Item } from './Item';
import { Pedido } from './Pedido';


export class Cliente {
  nome: string;
  telefone: string;

//metodos especial que executa apenas uma vez , que é ao criar o objeto
  constructor() {
    this.nome = "";
    this.telefone = "";

}
atulizarTelefone(novoTelefone: string){
  const ehTelefoneValido: boolean = this.validarTelefone(novoTelefone);

  if(ehTelefoneValido) {
  this.telefone = novoTelefone;
  }else{
    throw new Error("Telefone inválido");
  }
}

validarTelefone(telefone:string): boolean {
  return(telefone.length === 11);
}

criarClientes(nome: string, telefone: string): Cliente {
    this.nome = nome;
    if(nome.length < 5){
      throw new Error("Nome inválido");
    }
    this.nome = nome;
    this.telefone = telefone;
  
      return this;

  }
  
}