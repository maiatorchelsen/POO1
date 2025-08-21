export class Cliente {
  nome: string;
  telefone: string;

//metodos especial que executa apenas uma vez , que é ao criar o objeto
  constructor(nomeCliente: string = "", telefone: string = "") {
    this.nome = nomeCliente;
    this.telefone = "";
}
}