import {fakerPT_BR as faker} from '@faker-js/faker';

export class Util {
     static gerarNomeAleatorio(): string {
        const randomNome = faker.person.firstName();
        return randomNome;
    }

    static gerarNumeroDePedido(): string {

        return"" + faker.number.int(1000, ).toString();}        
}
const nomeGerado = Util.gerarNomeAleatorio();
console.log(nomeGerado);

console.log(faker.phone.number());
console.log(faker.internet.email());
console.log(faker.commerce.product());
console.log(faker.commerce.price());