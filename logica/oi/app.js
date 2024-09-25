alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 1000 + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 1000');
    if (chute == numeroSecreto) {
        break;
    } else  {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute} `);   
        } else {
            alert(`O número secreto é maior que ${chute} `);
        }
       // tentativas = tentativas + 1;
       tentativas++;
    }
}

if (tentativas > 1) {
    alert(`Você descobriu, parabéns ${numeroSecreto} com ${tentativas} tentativas. `);
} else {
    alert(`Você descobriu, parabéns ${numeroSecreto} com ${tentativas} tentativa. `);
}
    