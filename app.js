alert('Bem vindo ao jogo do número secreto!');

let numeroMax = 50;

const numeroSecreto = parseInt(Math.random() * numeroMax + 1)
console.log(numeroSecreto)
let chute 
let tentativa = 1


while(numeroSecreto != chute) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMax}`)

    if(numeroSecreto == chute) {
        break;
        alert('Você descobriu o número secreto ' + numeroSecreto + '!');
        alert(`Levou ${tentativa} tentativas!`)
    } else {
        
        if (numeroSecreto > chute) {
            alert(`O número é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`)
        }
        tentativa ++
    } 
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'

alert(`Vc descobriu o número secreto ${numeroSecreto}, com ${tentativa} ${palavraTentativa}!`)

// if( tentativa > 1) {
//     alert(`Vc descobriu o número secreto ${numeroSecreto}, com ${tentativa} tentativas!`)
// } else {
//     alert(`Vc descobriu o número secreto ${numeroSecreto}, com ${tentativa} tentativa!`)
// }
