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