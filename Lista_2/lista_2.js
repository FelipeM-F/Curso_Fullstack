
console.clear();
const prompt = require('prompt-sync')();

function criarMatriz(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor((Math.random() * 20) - (Math.random() * 20));
        }
    }
    return matriz;
}
function imprimirMatriz(matriz) {
    matriz.forEach(linha => {    
        const linhaFormatada = linha.map(elemento => {
            const elementoFormatado = String(elemento).padStart(3); 
            return elementoFormatado;
          });
    console.log(`| ${linhaFormatada.join('  ')} |`);
    });
}


{   // 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
    // Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
    // Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
    // vida um fumante perderá e exiba o total em dias.

    //     function calcularDiasPerdidos(cigarrosPorDia, anosFumados) {
    //         const diasFumando = anosFumados * 365;
    //         const cigarrosFumados = cigarrosPorDia * diasFumando;
    //         const diasPerdidosPorCigarro = 10 * (1 / 1440);
    //         const diasPerdidos = cigarrosFumados * diasPerdidosPorCigarro;

    //         const anosPerdidos = Math.floor(diasPerdidos / 365);
    //         const diasRestantes = Math.floor(diasPerdidos % 365);
    //         const horasRestantes = Math.floor((diasPerdidos % 1) * 24);
    //         const minutosRestantes = Math.round(((diasPerdidos * 24) % 1) * 60);

    //         return { anos: anosPerdidos, dias: diasRestantes, horas: horasRestantes, minutos: minutosRestantes };
    //     }

    //     const cigarrosPorDia = parseInt(prompt('Digite a quantidade de cigarros fumados por dia: '));
    //     const anosFumados = parseInt(prompt('Digite a quantidade de anos fumados: '));
    //     const resultado = calcularDiasPerdidos(cigarrosPorDia, anosFumados);
    //     console.log(`Você perdeu ${resultado.anos} anos, ${resultado.dias} dias, ${resultado.horas} horas e ${resultado.minutos} minutos de vida.`);
}

{   // 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h
    // , exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
    // multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

    // function calcularMulta(velocidade, velocidadePermitida) {
    //     const valorMulta = 5;
    //     const excesso = velocidade - velocidadePermitida;
    //     const valorTotal = excesso * valorMulta;
    //     return valorTotal;
    // }

    // const velocidadePermitida = 80;
    // const velocidadeMedida = parseInt(prompt('Digite a velocidade do carro: '));
    // if (velocidadeMedida > velocidadePermitida){
    //     const multa = calcularMulta(velocidadeMedida, velocidadePermitida);
    //     console.log('Velocidade Medida : ', velocidadeMedida)
    //     console.log('Limite de velocidade : ', velocidadePermitida)
    //     console.log('Velocidade excedida em', (velocidadeMedida - velocidadePermitida),'km/h');
    //     console.log('Valor da multa: R$', multa);
    // } else {
    //     console.log('Velocidade permitida');
    // }  

}

{   // 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km.
    // Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
    // R$ 0.45 para viagens mais longas.

    // function calcularPrecoPassagem(distancia) {
    //     if (distancia <= 200) {
    //         const valorKm = 0.50;
    //         return distancia * 0.50;
    //     } else {
    //         const valorKm = 0.50;
    //         return distancia * 0.45;
    //     }
    // }

    // const distancia = parseFloat(prompt('Digite a distancia a percorrer em Km: '));
    // const precoPassagem = calcularPrecoPassagem(distancia);
    // console.log('Valor da passagem: R$', precoPassagem);
}

{   // 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
    // comprimentos e diga se é possível formar um triângulo com essas retas.
    // Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
    // lado deve ser menor que a soma dos outros dois.

    // function calcularTriangulo(ladoA, ladoB, ladoC) {
    //     if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // const ladoA = parseFloat(prompt('Digite o comprimento do lado A: '));
    // const ladoB = parseFloat(prompt('Digite o comprimento do lado B: '));
    // const ladoC = parseFloat(prompt('Digite o comprimento do lado C: '));    
    // console.log(calcularTriangulo(ladoA, ladoB, ladoC));
}

{    // 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

    // function calcularJoKenPo(jogador1) {
    //     let jogador2;
    //     let escolhaJ2 = Math.floor(Math.random() * 3) + 1;
    //     if (escolhaJ2 === 1) {
    //         jogador2 = 'pedra';
    //     } else if (escolhaJ2 === 2) {
    //         jogador2 = 'papel';
    //     } else {
    //         jogador2 = 'tesoura';
    //     }
    //     if (jogador1 === jogador2) {
    //         return 'Empate';
    //     } else if (jogador1 === 'pedra' && jogador2 === 'tesoura' || jogador1 === 'papel' && jogador2 === 'pedra' || jogador1 === 'tesoura' && jogador2 === 'papel') {
    //         console.log('Jogador 2: ' + jogador2);
    //         return console.log('Jogador 1 venceu');
    //     } else {
    //         console.log('Jogador 2: ' + jogador2);
    //         return console.log('Jogador 2 venceu');
    //     }
    // }
    // let jogador1 = prompt('Digite sua escolha: ').toLowerCase();

    // while((jogador1 != 'pedra' && jogador1 != 'tesoura' && jogador1 != 'papel')){
    //     console.log('Escolha inválida!');
    //     jogador1 = prompt('Digite sua escolha: ').toLowerCase();
    // }
    // calcularJoKenPo(jogador1);
}

{   // 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
    // tentar descobrir qual foi o valor sorteado.

    // let numero = Math.floor(Math.random() * 5 +1);
    // let chances = 4;

    // while(chances >0) {
    //     let chute = prompt('Escolha um número de 1 a 5: ');
    //     if (chute == numero){
    //         console.log('Acertou');
    //         break;
    //     }
    //     chances--;
    //     console.log('Errou, chances restantes ', chances);
    // }
}

{   // 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
    // carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
    // cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
    // (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
    // mostre o preço a ser pago de acordo com os dados a seguir:
    // Carros populares
    // - Até 100 Km percorridos: R$ 0,20 por Km
    // - Acima de 100 Km percorridos: R$ 0,10 por Km
    // Carros de luxo
    // - Até 200 Km percorridos: R$ 0,30 por Km
    // - Acima de 200 Km percorridos: R$ 0,25 por Km

    // function aluguelCarro (tipoCarro, diasAluguel, kmPercorridos) {
    //     let precoAluguel = 0;
    //     if (tipoCarro === 'popular') {
    //         precoAluguel = 90;
    //         if (kmPercorridos <= 100) {
    //             precoAluguel += 0.20 * kmPercorridos;
    //         } else {
    //             precoAluguel += 0.10 * kmPercorridos;
    //         }
    //     } else if (tipoCarro === 'luxo') {
    //         precoAluguel = 150;
    //         if (kmPercorridos <= 200) {
    //             precoAluguel += 0.30 * kmPercorridos;
    //         } else {
    //             precoAluguel += 0.25 * kmPercorridos;
    //         }
    //     }
    //     return precoAluguel * diasAluguel;
    // }

    // let tipoCarro = prompt('Digite o tipo de carro (popular ou luxo): ');
    // let diasAluguel = parseInt(prompt('Digite a quantidade de dias de aluguel: '));
    // let kmPercorridos = parseInt(prompt('Digite a quantidade de Km percorridos: '));

    // console.log(aluguelCarro(tipoCarro, diasAluguel, kmPercorridos));
}

{   // 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
    // podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
    // sistema funciona assim:
    // - até 10 h de atividade no mês: ganha 2 pontos por hora
    // - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
    // - acima de 20 h de atividade no mês: ganha 10 pontos por hora
    // - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
    // Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
    // Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

    // function pointsCalculator(exerciseHours) {
    //     let points = 0;
    //     if (exerciseHours <= 10) {
    //         points = exerciseHours * 2;
    //     } else if (exerciseHours <= 20) {
    //         points = exerciseHours * 5;
    //     } else {
    //         points = exerciseHours * 10;
    //     }
    //     return points;
    // }

    // function moneyCalculator(points) {
    //     let money = 0;
    //     money = points * 0.05;
    //     return money.toFixed(2);
    // }

    // let exerciseHours = parseInt(prompt('How much hours do you exercise this month: '));
    // let points = pointsCalculator(exerciseHours);
    // let money = moneyCalculator(points);
    // console.log(`You have exercise for ${exerciseHours}hours this month.`);
    // console.log(`Making ${points} points and you gain R$ ${money} of cash`);
}

{   // 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
    // mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
    // perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
    // funcionário.

    // let salarios = [];
    // let continuar;
    // do {
    //     let salario = parseFloat(prompt('Digite o salário do funcionário: '));
    //     let sexo = prompt('Digite o sexo do funcionário (m/f): ').toLowerCase();
    //     let funcionario = {salario, sexo};
    //     console.log(funcionario);
    //     salarios.push(funcionario);
    //     console.log(salarios);
    //     continuar = prompt('Deseja cadastrar um novo salário? (s/n)').toLowerCase();
    // } while (continuar === 's')
        
    // let totalSalarios = {m: 0, f: 0};
    // let contadorFuncionarios = {m: 0, f: 0};
    // salarios.forEach(funcionario => {
    //     if (funcionario.sexo === 'm') {
    //         totalSalarios.m += funcionario.salario;
    //         contadorFuncionarios.m++;
    //     } else {
    //         totalSalarios.f += funcionario.salario;
    //         contadorFuncionarios.f++;
    //     }
    // });
    
    // let mediaSalarios = {
    //     m: totalSalarios.m / contadorFuncionarios.m,
    //     f: totalSalarios.f / contadorFuncionarios.f
    // };
    
    // console.log("Total de salários pagos aos homens: " + totalSalarios.m);
    // console.log("Total de salários pagos às mulheres: " + totalSalarios.f);
    // console.log("Número total de funcionários homens: " + contadorFuncionarios.m);
    // console.log("Número total de funcionários mulheres: " + contadorFuncionarios.f);
    // console.log("Média salarial dos homens: " + mediaSalarios.m);
    // console.log("Média salarial das mulheres: " + mediaSalarios.f);
}

{   // 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
    // cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
    // a) O somatório entre todos os valores;
    // b) Qual foi o menor valor digitado;
    // c) A média entre todos os valores;
    // d) Quantos valores são pares.

    // let continueInput = 'y';
    // let sum = 0;
    // let smallest;
    // let average = 0;
    // let count = 0;
    // let evenNumbers = 0;
    // do {
    //     let value = parseInt(prompt('Enter an integer value: '));
    //     if(!isNaN(value)) {
    //         sum += value;
    //         if (smallest === undefined || value < smallest) {
    //             smallest = value;
    //         }
    //         count++;
    //         average = sum / count;
    //         if (value % 2 === 0) {
    //             evenNumbers++;
    //         }
    //     }
    //     do {
    //         continueInput = prompt('Do you want to continue? (y/n)').toLowerCase();
    //     } while (continueInput != 'y' && continueInput != 'n');
    // } while (continueInput === 'y');

    // console.log(`Sum: ${sum}`);
    // console.log(`Smallest: ${smallest}`);
    // console.log(`Average: ${average.toFixed(2)}`);
    // console.log(`Even Numbers: ${evenNumbers}`);
}

{   // 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    // Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    // valores da sequência.

    // function arithmeticProgression(initialValue, ratio){
    //     let ap = [];
    //     while(ap.length < 10){
    //         ap.push(initialValue);
    //         initialValue += ratio;
    //     }
    //     ap.forEach(value => {
    //         console.log(value);
    //     });
    //     console.log(`Sum: ${ap.reduce((sum, element) => sum + element)}`);
    // }
    // arithmeticProgression(1, 10);
}

{   // 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
    // Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
    
    // fibonacci = [1,1];
    // while(fibonacci.length < 10) {
    //     fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    // }
    // console.log(fibonacci);
}

{   // 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
    // atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    // da sequência de Fibonacci.
    // function fibonacci(valuesWanted) {
    //     fibo = [1,1];
    //     while(fibo.length < valuesWanted) {
    //         fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
    //     }
    //     return fibo;
    // }
    // console.log(fibonacci(15));
}

{   // 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
    // mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
    // que eles foram informados.

    // let names = [];

    // while(names.length < 7) {
    //     let name = prompt('Enter a name: ');
    //     isNaN(name) ? names.unshift(name) : null;
    // }
    // console.log('Names in reverse order:');
    // names.forEach(name => console.log(name));
}

{   // 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
    // final, mostre quais são os números pares que foram digitados e em que posições eles
    // estão armazenados.

    // let values = [];
    // let evenNumbers = [];
    // let value = 1;
    // while(values.length < 10) {
    //     value = parseInt(prompt('Enter an integer value: '));
    //     !isNaN(value) ? values.push(value) : null;
    //     if (value % 2 === 0) {
    //         let even = {value, index: (values.length-1)};
    //         evenNumbers.push(even);
    //     }
    // }
    // console.log('Even numbers:',evenNumbers);
}

{   // 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
    // (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
    // depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

    // let array =[];
    // for (let i = 0; i < 20; i++) {
    //     let random = Math.floor(Math.random() * 100);
    //     array.push(random);
    // }
    // console.log("Orginal Array")
    // console.log(array);
    // array.sort((a,b) => a - b);
    // console.log("Sorted Array")
    // console.log(array);
}

{   // 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
    // dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
    // os dados das pessoas menores de idade.
    
    // let names = [];
    // let ages = [];
    // for (let i = 0; i < 9; i++) {
    //     let name = prompt('Enter a name: ');
    //     let age = parseInt(prompt('Enter an age: '));
    //     names.push(name);
    //     ages.push(age);
    // }
    // for (let i = 0; i < ages.length; i++) {
    //     if (ages[i] < 18) {
    //         console.log(`Name: ${names[i]} - Age: ${ages[i]}`);
    //     }
    // }    
}

{   // 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
    // um funcionário e ao final escreva o conteúdo do registro.
    
    // let record = {
    //     name: '',
    //     position: '',
    //     salary: 0
    // };        
    // record.name = prompt('Enter your name: ');
    // record.position = prompt('Enter your job: ');
    // record.salary = parseFloat(prompt('Enter your salary:'));
    // console.log(record);
}

{   // 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
    // repetição. Escrever cada um deles no formato HH.MM.SS.

    // let times = [];
    // function hourInput() {
    //     let hours = prompt('Enter the hours (HH): ');
    //     if (!hours.match(/^[0-9]{2}$/) || parseInt(hours) > 23) {
    //         console.log('Invalid hours format. Please enter two digits for hours (00-23).');
    //         hourInput();
    //     }
    //     return hours;
    // }
    // function minuteInput() {
    //     let minutes = prompt('Enter the minutes (MM): ');
    //     if (!minutes.match(/^[0-9]{2}$/) || parseInt(minutes) > 59) {
    //         console.log('Invalid minutes format. Please enter two digits for minutes (00-59).');
    //         minuteInput();
    //     }
    //     return minutes;
    // }
    // function secondsInput() {
    //     let seconds = prompt('Enter the seconds (SS): ');
    //     if (!seconds.match(/^[0-9]{2}$/) || parseInt(seconds) > 59) {
    //         console.log('Invalid seconds format. Please enter two digits for seconds (00-59).');
    //         secondsInput();
    //     }
    //     return seconds;
    // }

    // while (times.length < 5) {
    //     console.log('Enter the next time:');
    //     let timeEntry = `Registered Time: ${hourInput()}:${minuteInput()}:${secondsInput()}`;
    //     times.push(timeEntry);
    // }
    // console.log(times);
}

{   // 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
    // no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
    // salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
    // tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
    //     Matrícula:
    //     Nome:
    //     Salário bruto:
    //     Dedução INSS:
    //     Salário líquido:
    // (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
    // INSS).

    // function gerarFuncionarios(quantidade) {
    //     let funcionarios = [];
    //     for (let i = 1; i <= quantidade; i++) {
    //       let matricula = (i < 10 ? '00' : i < 100 ? '0' : '') + i;
    //       let nome = `Funcionario ${i}`;
    //       let salarioBruto = (Math.floor(1000 + Math.random()*7700) + Math.random()).toFixed(2);
    //       funcionarios.push({
    //         "matricula": matricula,
    //         "nome": nome,
    //         "salarioBruto": salarioBruto
    //       });
    //     }
    //     return funcionarios;
    //   }

    // let funcionarios = gerarFuncionarios(80);

    // function deducaoInss(salarioBruto){
    //     const faixasSalariais = [
    //         { faixaInicial: 0, faixaFinal: 1412, aliquota: 0.075 },
    //         { faixaInicial: 1412.01, faixaFinal: 2666.68, aliquota: 0.09 },
    //         { faixaInicial: 2666.69, faixaFinal: 4000.03, aliquota: 0.12 },
    //         { faixaInicial: 4000.04, faixaFinal: 7786.02, aliquota: 0.14 },
    //         { faixaInicial: 7786.03, faixaFinal: Infinity, aliquota: 0.16 }
    //     ];
    //     for (const faixa of faixasSalariais) {
    //         if (salarioBruto > faixa.faixaInicial && salarioBruto <= faixa.faixaFinal) {
    //             let deducao = (salarioBruto * faixa.aliquota).toFixed(2);
    //             return deducao;
    //         }
    //     }
    // };
    // function emissãoContracheque(funcionario){
    //     let contraCheque = {};
    //     contraCheque.funcionario = funcionario;
    //     let deducao = deducaoInss(funcionario.salarioBruto);
    //     contraCheque.deducaoINSS = deducao;
    //     contraCheque.salarioLiquido = (funcionario.salarioBruto - deducao).toFixed(2);
    //     return contraCheque;
    // };

    // funcionarios.forEach(funcionario => {
    //     let contraCheque = (emissãoContracheque(funcionario));

    //     console.log('====================================');
    //     console.log(`Matricula: ${contraCheque.funcionario.matricula}\nNome: ${contraCheque.funcionario.nome}\nSalario bruto: ${contraCheque.funcionario.salarioBruto}\nDeducao INSS: ${contraCheque.deducaoINSS}\nSalario liquido: ${contraCheque.salarioLiquido}`);
    // });
}

{   // 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
    // retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
    // = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

    // function idealWeight(height, gender) {
    //     if (!gender.match(/^[mf]$/)) 
    //         return 'Invalid gender (m/f)';

    //     if (!height.match(/^\d\.\d{2}$/))
    //         return 'Please enter a valid height in the format a.aa (e.g., 1.75)';

    //     let idealWeight = 0;
    //     if (gender === 'm') {
    //         idealWeight = (72.7 * height) - 58;
    //     } else if (gender === 'f') {
    //         idealWeight = (62.1 * height) - 44.7;
    //     }
    //     return idealWeight.toFixed(2);
    // }
    
    // let height = prompt('Enter your height in the format a.aa (e.g., 1.75): ');
    // let gender = prompt('Enter your gender (m/f): ').toLowerCase();

    // console.log(idealWeight(height,gender), 'kg');
}

{   // 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
    // dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
    // número não determinado de pessoas e retorne a média de salário da população, a
    // média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
    // 350,00.

    // function createCitizen() {
    //     let citizen = {
    //         salary: 0,
    //         children: 0
    //     };
    //     citizen.salary = Math.floor(Math.random() * 5000);
    //     citizen.children = Math.floor(Math.random() * 6);
    //     return citizen;
    // }
    
    // function citizensAnalysis(citizens) {
    //     let averageSalary = 0;
    //     let averageChildren = 0;
    //     let highestSalary = 0;
    //     let peopleWithSalaryUpTo350 = 0;
    
    //     for (let i = 0; i < citizens.length; i++) {
    //         averageSalary += citizens[i].salary;
    //         averageChildren += citizens[i].children;
    //         if (citizens[i].salary > highestSalary) {
    //             highestSalary = citizens[i].salary;
    //             highestSalary = highestSalary.toFixed(2);
    //         }
    //         if (citizens[i].salary <= 350) {
    //             peopleWithSalaryUpTo350++;
    //         }
    //     }
    
    //     averageSalary /= citizens.length;
    //     averageSalary = averageSalary.toFixed(2);
    //     averageChildren /= citizens.length;
    //     peopleWithSalaryUpTo350 /= citizens.length;
    //     peopleWithSalaryUpTo350 *= 100;
    //     peopleWithSalaryUpTo350 = peopleWithSalaryUpTo350.toFixed(2) + '%';
    
    //     let data = {
    //         averageSalary,
    //         averageChildren,
    //         highestSalary,
    //         peopleWithSalaryUpTo350
    //     };
    //     return data;
    // }
    
    // let citizens = [];
    // let quantity = prompt('Enter the amount of citizens: ');
    // for (let i = 0; i < quantity; i++) {
    //     citizens.push(createCitizen());
    // }
    // console.log(citizensAnalysis(citizens));
    

}

{   // 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
    // diagonal principal são iguais a 1 e os demais são nulos.

    // let tamanho = prompt('Digite o tamanho da matriz:');
    // let matrizIdentidade = [];
    // for (let i = 0; i < tamanho; i++) {
    //     matrizIdentidade[i] = [];
    //     for (let j = 0; j < tamanho; j++) {
    //         matrizIdentidade[i][j] = (i === j) ? 1 : 0;
    //     }
    // }
    // matrizIdentidade.forEach(linha => {
    //     console.log(`| ${linha.join('  ')} |`);
    // });    
}

{   // 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
    // quantidade de elementos negativos da linha correspondente de M.

    // let tamanho = prompt('Digite o tamanho da matriz:');
    // let matriz = [];
    // let negativos = [];
    // for (let i = 0; i < tamanho; i++) {
    //     matriz[i] = [];
    //     for (let j = 0; j < tamanho; j++) {
    //         matriz[i][j] = Math.floor((Math.random() * 20) - (Math.random() * 20));
    //     }
    // }
    // matriz.forEach(linha => {
    //     let cont=0;
    //     for (let i = 0; i < linha.length; i++) {
    //         if (linha[i] < 0) {
    //             cont++;
    //         }
    //     }
    //     negativos.push(cont);
    // });
    // let index = 0;
    // negativos.forEach(negativo => {
    //     console.log('Index:',index,'-',negativo);
    //     index++;
    // });
}

{   // 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
    // de cada coluna separadamente.

    // let matriz = [];
    // for (let i = 0; i < 15; i++) {
    //     matriz[i] = [];
    //     for (let j = 0; j < 20; j++) {
    //         matriz[i][j] = Math.floor((Math.random() * 20) - (Math.random() * 20));
    //     }
    // }
    // matriz.forEach(linha => {
    //     console.log(`| ${linha.join('  ')} |`);
    // });    
    // for (let i = 0; i < 20; i++) {
    //     let soma = 0;
    //     for (let j = 0; j < 15; j++) {
    //         soma += matriz[j][i];
    //     }
    //     console.log('Soma da coluna', i, ':', soma);
    // }
}

{   // 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
    // P[1..3,1..5].

    // function matrizProduto(matrizA, matrizB) {        
    //     if(matrizA[0].length != matrizB.length){
    //         return 'Matrizes não podem ser multiplicadas';
    //     }
    //     let matrizProduto = [];
    //     for (let i = 0; i < matrizA.length; i++) {
    //         matrizProduto[i] = [];
    //         for (let j = 0; j < matrizB[0].length; j++) {
    //             let soma = 0;
    //             for (let k = 0; k < matrizA[0].length; k++) {
    //                 soma += matrizA[i][k] * matrizB[k][j];
    //             }
    //             matrizProduto[i][j] = soma;
    //         }
    //     }
    //     return matrizProduto;
    // }

    // let matrizA = criarMatriz(4, 4);
    // let matrizB = criarMatriz(2, 2);
    // console.log(matrizA);
    // console.log(matrizB);
    // console.log(matrizProduto(matrizA, matrizB));  
}

{   // 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
    // multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
    // um vetor V(36). Escrever o vetor V no final.

    // let matriz = criarMatriz(6, 6);
    // const a = prompt('Digite um valor A:');
    // let vetor = [];
    // matriz.forEach(linha => {    
    //     linha.forEach(elemento => {
    //         elemento *= a;
    //         vetor.push(elemento);
    //     })
    // })
    // console.log(`Matriz original: `);
    // imprimirMatriz(matriz);
    // console.log('=====================================')
    // console.log(`Vetor resultante:\n[ ${vetor.toString()} ]`);
}

{   // 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
    // item:
    //     a) a soma dos elementos acima da diagonal principal;
    //     b) a soma dos elementos abaixo da diagonal principal;

    // let matriz = criarMatriz(10,10);
    // let somaAcimaDiagonal = 0;
    // let somaAbaixoDiagonal = 0;
    // matriz.forEach((linha, indexM) => {
    //     linha.forEach((elemento, index) => {
    //         if (index > indexM) {
    //             somaAcimaDiagonal += elemento;
    //         } else if (index < indexM) {
    //             somaAbaixoDiagonal += elemento;
    //         }
    //     })
    // })
    // imprimirMatriz(matriz);
    // console.log('=====================================')
    // console.log(`Soma dos elementos acima da diagonal principal: ${somaAcimaDiagonal}`);
    // console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixoDiagonal}`);
}

{   // 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
    // a) da linha 4 de M;
    // b) da coluna 2 de M;
    // c) da diagonal principal;
    // d) todos os elementos da matriz M.
    // Escrever essas somas e a matriz.

    // let matriz = criarMatriz(5, 5);
    // let somaLinha4 = 0;
    // let somaColuna2 = 0;
    // let somaDiagonalPrincipal = 0;
    // let somaElementos = 0;
    // matriz.forEach((linha, indexM) => {
    //     linha.forEach((elemento, index) => {            
    //         somaElementos += elemento;
    //         somaLinha4 += indexM === 3 ? elemento : 0;
    //         somaColuna2 += index === 1 ? elemento : 0;
    //         somaDiagonalPrincipal += index === indexM ? elemento : 0;
    //     })
    // })
    // console.log(`Matriz original: `);
    // imprimirMatriz(matriz);
    // console.log('=====================================')
    // console.log(`Soma da linha 4: ${somaLinha4}`);
    // console.log(`Soma da coluna 2: ${somaColuna2}`);
    // console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`);
    // console.log(`Soma dos elementos: ${somaElementos}`);
    // console.log('=====================================')
    
}