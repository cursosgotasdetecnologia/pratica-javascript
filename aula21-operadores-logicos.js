//OPERADORES LÓGICOS
// let emailValido = false;
// let senhaValida = true;

// OPERADOR 'E'
// let loginPermitido = emailValido && senhaValida;
// console.log("Login permitido?", loginPermitido); 

// OPERADOR 'OU'
//let loginPermitido = emailValido || senhaValida;
//console.log("Login permitido?", loginPermitido); 

// OPERADOR 'NAO'
// let loginPermitido = !emailValido && !senhaValida;
// console.log("Login permitido?", loginPermitido); 

// if  = Se
// else = senão

// Usando para tomar decisões
// if (emailValido && senhaValida) {
//   console.log("✅ Login permitido!");
// } else {
//   console.log("❌ Login negado!");
// }

//////////////////////////////////////////

let isAdmin = false;
let isModerador = false;

// Basta UMA ser true
if (isAdmin || isModerador) {
  console.log("✅ Pode editar conteúdo!");
} else {
  console.log("❌ Sem permissão!");
}


/////////
// Combinando operadores - Cenário real de QA

// let idadeUsuario = 25;
// let temCartao = true;
// let saldoPositivo = false;

// // Pode comprar SE: maior de 18 E (tem cartão OU saldo positivo)
// let podeComprar = (idadeUsuario >= 18) && (temCartao || saldoPositivo);
// // let podeComprar = (V) && (V || F);
// // let podeComprar = (V) && (V);
// // let podeComprar = V


// if (podeComprar) {
//   console.log("✅ Compra autorizada!");
// } else {
//   console.log("❌ Compra negada!");
// }

// console.log("Resultado:", podeComprar); // true


////



// Validação: produto pode ser vendido? (usando let simples)
let nome = "Camiseta";
let preco = 89.9;
let estoque = 5;
let emPromocao = false;

// Regra: estoque > 0 E (preco < 100 OU emPromocao)
let podeSerVendido = (estoque > 0) && (preco < 100 || emPromocao);
//let podeSerVendido = (V) && (v || emPromocao);
//let podeSerVendido = (V) && (v || F);
//let podeSerVendido = (V) && (V);
//let podeSerVendido =  V


if (podeSerVendido) {
    console.log("✅ Produto '" + nome + "' pode ser vendido");
} else {
    console.log("❌ Produto '" + nome + "' NÃO pode ser vendido");
}

console.log("Detalhes:", { nome, preco, estoque, emPromocao });

