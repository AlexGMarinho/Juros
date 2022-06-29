import readlineSync from 'readline-sync';

console.log(`Aplicação de Juros:\n`);

let valor = readlineSync.question(`Informe o valor devido: R$ `);
valor = Number(valor);

if (valor > 0) {
    let dias = readlineSync.question(`Informe quantos dias se passaram desde o vencimento do boleto: `);

    if (dias > 0) {
        if (dias > 15) {
            let juros = 10;
            let valor_juros = (valor / 100) * juros;
            console.log(`\nValor original da dívida: R$ ${valor}`);
            console.log(`Días atrasados: ${dias}`);
            console.log(`Taxa de Juros: ${juros}%`);
            console.log(`Valor total com juros: ${valor + valor_juros}`);
        } else {
            let juros = 5;
            let valor_juros = (valor / 100) * 5;
            console.log(`Valor original da dívida: R$ ${valor}`);
            console.log(`Días atrasados: ${dias}`);
            console.log(`Taxa de Juros: ${juros}%`);
            console.log(`Valor total com juros: ${valor + valor_juros}`);
        }
    } else {
        console.log(`Você está em dia!`);
    }
} else {
    console.log(`O valor da dívida deve ser maior que zero!`);
}
