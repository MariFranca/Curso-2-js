// 1. Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log('ola mundo');
}
olaMundo(); //Para que a função seja exibida e executada apos criarmos ela temos que chamar ela.


// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome) {
    console.log(`Olá ${nome}`);
}
olaNome('Mariana'); //Neste caso como criamos uma função e precisamos de um parametro, esse parametro tem que ser passado quando nos chamamos ele.


// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero){
    return numero * 2;
}
console.log(dobro(5));


// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(a, b, c){
   return (a + b + c) / 3;
}
console.log(media(2, 3, 4));


// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numeroMaior(a, b) {
    return Math.max(a, b); //Podemos ultilizar o Math.max() para descobrir o numero maior, basta chamarmos ele e passar os parametros que queremos comparar.
}
console.log(numeroMaior(5, 3));


// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function maiorNumero(a){
    return a * a;
}
console.log(maiorNumero(3));



// 7. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function imc(altura, peso){
    let calculandoImc = peso / (altura * altura);
    return calculandoImc
}
console.log(imc(1.70, 57));


// 8. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function valorFatorial(numero){
    let acumulador = 1; 
    while(numero > 1){ //Ultilizamos o while pois ele só ira rodar se a condição passada nele for verdadeira.
        acumulador = acumulador * numero;//Nesta linha pegamos o acumulador que é o nosso contador e multiplicamos pelo número (acumulador *= numero; multiplica e atualiza o acumulador) => Jeito simplificado.
        numero = numero - 1; //A mesma coisa nesta linha, pegamos o número e subtraimos por 1 para que a cada vez que esse código for executado ele diminua um ate chegar em 1  (numero--; diminui o numero) => Jeito simplificado.
    } //nesses dois casos a cima é necessario salvar as informações em variaveis, pois se não nada irá acontecer 
    return acumulador;
}
console.log(valorFatorial(5));


// 9. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function valorEmDolar(valor){
    return valor * 4.80; // Número decimal em JavaScript usa ponto (.)
}
console.log(valorEmDolar(10));


// 10. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaEPerimetroRetangulo(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    return {area, perimetro}; //Em um return caso formos retornar duas variaveis não podemos imentar uma na outra dessa maneira => return area, perimetro
    //Temos algumas formas certas de fazer isso ultilizando um Array => return [area, perimetro]; que não é tão ultilizado ou ultilizando um objeto que é mais comum, ficando assim => return { area: area, perimetro: perimetro}; ou de uma forma mais simplificada => return { area, perimetro };
}
let resultadoRetangulo = areaEPerimetroRetangulo(4,5);
console.log('Área:', resultado.area);
console.log('Perímetro:', resultado.perimetro);


// 11. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
// Perımetro=2×π×r
// Area=π×r2
function areaEPerimetroCirculo(raio){
    let pi = 3.14;
    let area = pi * raio **2;
    let perimetro = 2 * pi * raio;
    return {area, perimetro};
}
let resultadoCirculo = areaEPerimetroCirculo(5);
console.log('Área', resultadoCirculo.area);
console.log('Perímetro', resultadoCirculo.perimetro);


// 12. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    // Um loop for em JavaScript tem três partes principais, separadas por ponto e vírgula. São elas => Inicialização, condição e atualização. 
    for (let contador = 1; contador <= 10; contador++){  
        let resultado = numero * contador;
        console.log(`${numero} X ${conatdor} = ${resultado}`)
    }
    
}
tabuada(5)


// 13. Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];


// 14. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


// 15. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');
console.log(linguagensDeProgramacao);


// 16. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let nomesEscolhidos = ['Ana', 'Pedro', 'Lucas'];
console.log(nomesEscolhidos[0]);

// 17. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
console.log(nomesEscolhidos[1]);

// 18. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
console.log(nomesEscolhidos[2]);