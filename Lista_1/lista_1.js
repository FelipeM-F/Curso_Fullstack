

console.clear();
const prompt = require('prompt-sync')();
let escolha = 1;
do{
    
    console.log("****************************************************");
    console.log("Escolha um exercício para realizar:");
    console.log("1 - Conversão de Celsius para Fahrenheit");
    console.log("2 - Cálculo de Percentagens em Eleições");
    console.log("3 - Operações com Números Inteiros");
    console.log("4 - Cálculo da Média Semestral e Mensagem de Aprovação");
    console.log("5 - Cálculo da Média Semestral e Mensagem de Aprovação ou Mensagem de Reprovação");
    console.log("6 - Tipo de Triângulo");
    console.log("7 - Valor Total da Compra de Maçãs");
    console.log("8 - Ordenar Valores Crescentemente");
    console.log("9 - Região de Origem do Produto");
    console.log("10 - Repetir um Número 10 Vezes");
    console.log("11 - Par ou Ímpar");
    console.log("12 - Números Múltiplos de 5 Entre 1000 e 1999");
    console.log("13 - N valores da Tabuada");
    console.log("14 - Média Aritmética de Números Decimais");
    console.log("15 - Média Ponderada de Números Decimais");
    console.log("16 - Números Primos Acima de 100");
    console.log("****************************************************");
    escolha = parseInt(prompt('Escolha um exercício ou 0 para parar: '));

    console.log("****************************************************");
    switch (escolha){
        // 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
        // valor correspondente em graus Fahrenheit.
        case 1:           
            
            let celsius = (prompt('Digite a temperatura em Celsius: '));
            let fahrenheit = (celsius * 9/5) + 32;
            console.log("\nTemperatura em Fahrenheit: "+ fahrenheit+"°F");
            break;
        // 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
        // votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
        // em relação ao total de eleitores.
        case 2:
        
            let eleitores = parseInt(prompt('Digite o número de eleitores: '));
            let brancos = parseInt(prompt('Digite o número de votos brancos: '));
            let nulos = parseInt(prompt('Digite o número de votos nulos: '));
            let validos = eleitores - (brancos + nulos);
            console.log("Total de votos válidos: "+ validos);
            let percentual_brancos = (brancos/eleitores * 100).toFixed(2);
            let percentual_nulos = (nulos/eleitores * 100).toFixed(2);
            let percentual_validos = (validos/eleitores * 100).toFixed(2);

            console.log("\nPercentual de votos brancos: "+ percentual_brancos+"%");
            console.log("Percentual de votos nulos: "+ percentual_nulos+"%");
            console.log("Percentual de votos válidos: "+ percentual_validos+"%");
            break;
        // // 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
        // ● Some 25 ao primeiro inteiro;
        // ● Triplique o valor do segundo inteiro;
        // ● Modifique o valor do terceiro inteiro para 12% do valor original;
        // ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
        //  dos primeiros três inteiros
        case 3:
            
            console.log("****************************************************");
            let num1 = parseInt(prompt('Digite o primeiro número: '));
            let num2 = parseInt(prompt('Digite o segundo número: '));
            let num3 = parseInt(prompt('Digite o terceiro número: '));
            let num4 = num1 + num2 + num3;
            console.log("****************************************************");
            let novoNum1 = 25 + num1;
            let novoNum2 = num2 * 3;
            let novoNum3 = num3 * (12/100);

            console.log(`1- Primeiro inteiro (${num1}) + 25: `+ novoNum1);
            console.log(`2 -Segundo inteiro (${num2}) vezes 3: `+ novoNum2);
            console.log(`3- 12% do valor do Terceiro inteiro (${num3}): `+ novoNum3);
            console.log(`4- Soma dos valores originais (${num1}, ${num2}, ${num3}): `+ num4);
            console.log("****************************************************");
            break;
        // 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
        // calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
        // aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
        // aprovação)
        case 4:
            {
            let nota1 = parseFloat(prompt('Digite a primeira nota: '));
            let nota2 = parseFloat(prompt('Digite a segunda nota: '));
            let media = (((nota1) + (nota2))/2);
            console.log("Sua média foi: "+ media);
            const mensagemAprovacao = media >= 6.0 ? "PARABÉNS! Você foi aprovado":"";
            console.log(mensagemAprovacao);
            }
            break;
        // 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
        // média calculada seja menor que 6,0
        case 5:
            {
            let nota1 = parseFloat(prompt('Digite a primeira nota: '));
            let nota2 = parseFloat(prompt('Digite a segunda nota: '));
            let media = (((nota1) + (nota2))/2);
            console.log("Sua média foi: "+ media);
            const mensagemAprovacao = media >= 6.0 ? "PARABÉNS! Você foi aprovado":"Você foi REPROVADO! Estude mais";
            console.log(mensagemAprovacao);
            }
            break;
        // 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
        // formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
        // Isósceles, escaleno ou eqüilátero.
        // Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
        // Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
        // Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
        // Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
        case 6:
            {
            let ladoA = parseFloat(prompt('Digite o valor do lado A: '));
            let ladoB = parseFloat(prompt('Digite o valor do lado B: '));
            let ladoC = parseFloat(prompt('Digite o valor do lado C: '));
            let validacao = ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;
            if(validacao){
                if(ladoA===ladoB && ladoB===ladoC){
                    console.log("Triângulo eqüilátero");
                }else if(ladoA===ladoB || ladoA===ladoC || ladoB===ladoC){
                    console.log("Triângulo isósceles");
                }else{
                    console.log("Triângulo escaleno");
                }
            } else {
                console.log("Os lados não formam um triângulo");
            }
            }
            break;
        // 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
        // forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
        // compradas, calcule e escreva o valor total da compra.
        case 7:
            {
            let macas = parseInt(prompt('Digite o número de maçãs compradas: '));
            let valor = macas * 0.30;
            if(macas >= 12){
                valor = macas * 0.25;
            }
            console.log("Valor total da compra: R$ "+ valor);
            }
            break;
        // 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
        // e escreve-los em ordem crescente.
        case 8:
            {
            let valor1 = parseFloat(prompt('Digite o primeiro valor: '));
            let valor2 = parseFloat(prompt('Digite o segundo valor: '));
            while(valor1 === valor2){
                console.log("Os valores não podem ser iguais!");
                valor2 = parseFloat(prompt('Digite o segundo valor: '));
            }
            if(valor1 > valor2){
                let aux = valor1;
                valor1 = valor2;
                valor2 = aux;
            }
            console.log(`Os Valores digitados são:\n Menor: ${valor1} \n Maior: ${valor2}`);
            }
            break;
        // 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
        // do mesmo, conforme a tabela abaixo:
        // Código de origem:
        // 1- Sul
        // 2- Norte
        // 3- Leste
        // 4- Oeste
        // 5 ou 6 Nordeste
        // 7, 8 ou 9 Sudeste
        // 10 até 20 Centro-Oeste
        // 25 até 50 Nordeste
        // Fora dos Intervalos - Produto Importado
        case 9:
            {
            let codigoProduto = parseInt(prompt('Digite o código do produto: '));
            switch(codigoProduto){
                case 1:
                    console.log("Região: Sul");
                    break;
                case 2:
                    console.log("Região: Norte");
                    break;
                case 3:
                    console.log("Região: Leste");
                    break;
                case 4:
                    console.log("Região: Oeste");
                    break;
                case 5:    case 6:
                    console.log("Região: Nordeste");
                    break;
                case 7:    case 8:    case 9:
                    console.log("Região: Sudeste");
                    break;
                case codigoProduto: if (codigoProduto >= 10 && codigoProduto <= 20) {        
                    console.log("Região: Centro-Oeste");
                    break;
                    }
                default: console.log("Produto Importado");
            }
            }
            break;
        // 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
        case 10:
            {
            let num = parseInt(prompt('Digite um número: '));
            for(let i = 0; i < 10; i++){
                console.log(num);
            }
            }
            break;
        // 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
        // cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
        // ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
        // NEGATIVO.
        case 11:
            {
            let num = parseInt(prompt('Digite um número positivo: '));
            if(num < 0 || isNaN(num)){
                console.log("Valor inválido!");
            }
            while(num > 0){
                if(num % 2 === 0){
                    console.log("O número "+ num + " é par!");
                }else{
                    console.log("O número "+ num + " é impar!");
                }
                console.log("Se deseja parar digite um número menor que 0 ou pressione 'Enter'")
                num = parseInt(prompt('Digite um número: '));
            }
            console.log("Fim do programa!");
            }
            break;
        // 12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
        // divididos por 11, dão resto igual a 5.
        case 12:
            {
            for(let i = 1000; i <= 1999; i++){
                if(i % 11 === 5){
                    console.log(i);
                }
            }
            }
            break;
        // 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
        // calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
        // 1 x N = N
        // 2 x N = 2N
        // 3 x N = 3N
        case 13:
            {
            let n = parseInt(prompt('Digite um número: '));
            for(let i = 1; i <= n; i++){
                console.log(i + " x " + n + " = " + i * n);
            }
            }
            break;
        // Utilizar somente while do exercício 14 ao 16

        // 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
        // a média aritmética desses números.
        case 14:
            {
            let num = parseFloat(prompt('Digite um número decimal (como casas após a vírgula): '));
            let soma = 0;
            let cont = 0;
            if(parseInt(num) === num || isNaN(num)){
                console.log("Valor inválido!");
                return;
            }
            while(num !== 0){
                if(parseInt(num) === num || isNaN(num)){
                    console.log("Valor inválido!");
                } else{
                    soma += num;
                    cont++;
                }    
                num = parseFloat(prompt('Digite um número decimal (como casas após a vírgula) ou 0 para encerrar: '));
            }
            console.log("A média dos números digitados é: "+ (soma/cont));
            }
            break;
        // 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
        // que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
        // respectivos.
        case 15:
            {
            let num = parseFloat(prompt('Digite um número decimal (como casas após a vírgula): '));
            let soma = 0;
            let cont = 0;
            console.log(typeof(num));
            if(parseInt(num) === num || isNaN(num)){
                console.log("Valor inválido!");
                return;
            }
            let peso = parseInt(prompt('Digite um peso para o valor: '));
            while(num !== 0){
                if(parseInt(num) === num || isNaN(num)){
                    console.log("Valor inválido!");
                } else{
                    soma += num*peso;
                    console.log(soma);
                    cont += peso;
                    console.log(cont);
                }    
                num = parseFloat(prompt('Digite um número decimal (como casas após a vírgula) ou 0 para encerrar: '));
                peso = num !==0 ? parseInt(prompt('Digite um peso para o valor: ')) : "";
            }
            console.log("A média dos números digitados é: "+ (soma/cont));
            }
            break;
        // 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
        // Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
        case 16:
            {
            let cont = 0;
            let num = 101;
            let div = 95;
            while(cont < 50){
                let teste = num;
                if(teste % div === 0 && div < teste){
                    num = teste + 2;
                    div = 3;
                    } else if(div >= teste){
                        console.log(teste);
                        cont++;
                        num = teste + 2;
                        div = 3;
                        }
                div = div + 2;
                
                }
            }
            break;
        default: console.log("Opção inválida!");
    }
    
    escolha = parseInt(prompt("Digite 0 para parar ou 'Enter' para escolher uma opção: "));
} while(escolha !== 0);