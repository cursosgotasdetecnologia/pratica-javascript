// Condicional básico: if

// let statusCode = 200;

// if (statusCode === 400) {
//   console.log("✅ Teste passou!");
// }



// if / else

// let statusCode = 200;

// if (statusCode === 200) {
//   console.log("✅ Teste passou!");
// } else {
//   console.log("❌ Teste falhou!");
// }



// Validação de login

// let usuarioLogado = false;

// if (usuarioLogado) {
//   console.log("✅ Usuário autenticado, pode prosseguir");
// } else {
//   console.log("❌ Usuário não autenticado, redirecionar para login");
// }


// Múltiplas condições com else if

// let statusCode = 201;

// if (statusCode === 200) {
//   console.log("✅ Sucesso!");
// } else if (statusCode === 404) {
//   console.log("⚠️ Não encontrado!");
// } else if (statusCode === 500) {
//   console.log("❌ Erro no servidor!");
// } else {
//   console.log("❓ Status desconhecido");
// }


// Validar ambiente

// let ambiente = "local";

// if (ambiente === "production") {
//   console.log("🚨 CUIDADO! Ambiente de produção!");
// } else if (ambiente === "staging") {
//   console.log("✅ Ambiente de staging, pode testar");
// } else if (ambiente === "dev") {
//   console.log("🔧 Ambiente de desenvolvimento");
// } else {
//   console.log("❓ Ambiente desconhecido");
// }

// Usando && (E)

let idade = 17;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("✅ Pode dirigir!");
} else {
  console.log("❌ Não pode dirigir!");
}
