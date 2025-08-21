import { Cliente } from "./Clientes";

const cli: Cliente = new Cliente("João");
      cli.telefone = "987654321";
      
      const cli2: Cliente = new Cliente("Maria");
      cli2.telefone = "123456789";

      console.table(cli);