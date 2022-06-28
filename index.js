import jr from 'readline-sync';

console.log(`Aplicação de Juros:\n`);

let valor = jr.question(`Informe o valor devido: R$ `);
let dias = jr.question(`Informe quantos dias se passaram desde o vencimento do boleto: `);

console.log(`Valor original da dívida: R$ ${valor}`);
console.log(`Días atrasados: ${dias}`);
