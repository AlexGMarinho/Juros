import readlineSync from 'readline-sync';

console.log(`Aplicação de Juros:\n`);

let juros;

let valor_divida = readlineSync.question(`Informe o valor devido: R$ `);
valor_divida = Number(valor_divida);

if (valor_divida > 0) {
    let dias_vencimento = readlineSync.question(`Informe quantos dias_vencimento_vencimento se passaram desde o vencimento do boleto: `);

    if (dias_vencimento > 0) {
        if (dias_vencimento > 15) {
            juros = 10;
        } else {
            juros = 5;
        }
        let valor_juros = (valor_divida / 100) * juros;

        console.log(`\nValor original da dívida: R$ ${valor_divida}`);
        console.log(`Días atrasados: ${dias_vencimento}`);
        console.log(`Taxa de Juros: ${juros}%`);
        console.log(`Valor total com juros: ${valor_divida + valor_juros}`);
    } else {
        console.log(`Você está em dia!`);
    }
} else {
    console.log(`O valor da dívida deve ser maior que zero!`);
}
