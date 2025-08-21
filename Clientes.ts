export class Cliente {
  nome: string;
  telefone: string;

//metodos especial que executa apenas uma vez , que é ao criar o objeto
  constructor() {
    this.nome = "";
    this.telefone = "";

}
criarClientes(nome: string, telefone: string): Cliente {
    this.nome = nome;
    this.telefone = telefone;
  
      return this;
    
  }
}