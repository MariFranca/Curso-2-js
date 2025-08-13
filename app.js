let numeroSecreto =  gerarNumeroAleatorio();  
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTexto('h1', 'Seja bem vindo(a) ao jogo de número secreto.');
    exibirTexto('p','Escolha um número de 0 a 10');
}
exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value; //O value serve para quando nós queremos verificar apenas o valaor que esta sendo inserido pelo usuario. 
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativa' : 'tentativas'; //condição ? valorSeVerdadeiro : valorSeFalso
        //tentativas > 1 Condição que será avaliada.
        //'tentativa' É o valor que será usado se a condição for verdadeira.
        //'tentativas' É o valor que será usado se a condição for falsa.
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', mensagemTentativa); //Como o JS não é tipado, ou seja não definimos o tipo. Podemos trocar o texto pelo número.
        document.getElementById('reiniciar').removeAttribute('disabled'); //Deste modo conseguimos desabilitar o atributo presente no HTML
    } else {
        if(chute > numeroSecreto) {
            exibirTexto('p', 'O número secreto é menor');
    }  else {
            exibirTexto('p', 'O número secreto é maior');
    }

    tentativas++;
    limparCampo()
    }
}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); //Nesta linha nos geramos o número aleatorio e multiplicamos por 10 e somamos + 1 para que fique de 0 a 10 e não de 0 a 9 
    //O parseInt serve para transformar o número em inteiro
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    chute = 1;
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
