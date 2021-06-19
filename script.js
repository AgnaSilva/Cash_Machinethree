
alert("Olá, seja bem vindo!")
let opcao, vl_saq;
let saldo = 0;
let min = 0;
let max = 250;

do {
    opcao = parseInt(prompt("Escolha uma opção:\n1 - Saque\n0 - Sair")); // MENU inicial
    switch (opcao) {
    case 1:
        vl_saq = parseInt(prompt("Digite o valor do saque:"));
        if (vl_saq > saldo) {
            if (vl_saq > 0 && vl_saq < max) {
                alert("O saque está sendo realizado...\nAperte em OK");
                saldo -= vl_saq;
                alert("Operação Realizada!");
            } else alert("Saldo insufiente, seu saque pode ser realizado nos valores que sejam entre R$0,00 e R$250,00");
        } else alert("Saldo insuficiente! Você pode sacar\nR$ " + saldo.toFixed(2))
        alert('Obrigada por usar nossos serviços!')
        break;

        
    }
} 
while (opcao !=0);











