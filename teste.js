//questão 1

const fibonacci = (num) =>{
    let a = 0;
    let b = 1;
    let temp;

    if(num === a || num === b ) return `o numero ${num} pertence a sequencia`;

    while(b <= num){
        if (b === num) {
            return `o número ${num} pertence a sequencia de Fibonacci.`;
        }
        temp = a+b;
        a = b;
        b = temp;

    }

    return `o numero ${num} nao pertence a sequencia`;
}

console.log(fibonacci(100));

//questão 2
const verificaChar = (string) =>{
   const temp = string.toLowerCase().split('').filter(char => char === 'a');
   if(temp.length > 0) return `a letra 'a' aparece ${temp.length} vezes na palavra ${string}`;

   return `a letra 'a' nao aparece nenhuma vez na palavra ${string}`;
}
console.log(verificaChar('casA'));


/**
 * Questão 3 -> soma = 77

*Questão 4 -> a) 9 (soma 2 a cada numero)
*b) 128 (o proximo numero é o anterior * 2)
*c)49 (o proximo numero é a soma do anterior com o proximo numero impar, iniciando em 1)
*d)100(o quadro dos numeros pares)
*e)13(fibonacci)
*f)200(começa com 'd')

*5) ligaria um interruptor até a lâmpada esquentar, depois eu desligaria, ligaria outro e iria nas salas. Entraria em 
uma sala, se a lampâda estivesse quente, seria correspondente ao primeiro interruptor, se estivesse acesa, seria o 
segundo interruptor, se estivesse apagada, seria o terceiro. Agora ao entrar na outra sala, bastaria eliminar
 o primeiro interruptor que encontrei e repetir o processo com as duas opções que restaram.


 * 
 */
