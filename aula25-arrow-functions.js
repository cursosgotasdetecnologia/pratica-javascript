// Função tradicional
// function validarUsuario(nome) {
//   console.log("Validando:", nome);
// }
// validarUsuario("admin");




// //Mesma função com arrow function
//  const validarUsuarioArrow = (nome) => {
//    console.log("Validando:", nome);
//  };

//  validarUsuarioArrow("guest");


 //
//  // Arrow function com 2 parâmetros
// const fazerLogin = (email, senha) => {
//   console.log("Email:", email);
//   console.log("Senha:", senha);
//   console.log("✅ Login OK!");
// };

// fazerLogin("qa@test.com", "123456");



// Arrow function com retorno
// const somar = (a, b) => {
//   return a + b;
// };

// let resultado = somar(10, 5);
// console.log("Resultado:", resultado); // 15



// EXEMPLOS DE UMA LINHA
// Forma completa
// const multiplicar = (a, b) => {
//   return a * b;
// };


// // Forma simplificada (sem chaves, sem return)
// const multiplicarSimples = (a, b) => a * b;

// console.log(multiplicar(5, 3)); // 15
// console.log(multiplicarSimples(5, 3)); // 15


/*Quando tem **uma linha só**, você pode:

- Tirar as **chaves** `{}`
- Tirar o **return**
- Deixar tudo em uma linha!

*/


// Cenário 1: Validações rápidas
// const tituloCorreto = (titulo) => titulo === "Dashboard";
// const urlValida = (url) => url.startsWith("https://");
// const statusOk = (status) => status >= 200 && status < 300;

// console.log("Título OK?", tituloCorreto("Dashboard2")); // true
// console.log("URL válida?", urlValida("https://teste.com")); // true
// console.log("Status OK?", statusOk(201)); // true



// Assim você vai escrever testes em Playwright
const validarPagina = () => {
  console.log("🔍 Validando página...");
  console.log("✅ Página OK!");
};

validarPagina();



// quando usar `function` e quando usar arrow?
// "**Regra prática:**"

// Use arrow functions para:
// 1. Funções simples e curtas
const validar = (valor) => valor > 0;

// 2. Callbacks (veremos em loops)
// 3. Testes em Playwright

// Use function tradicional para:
// 1. Funções mais complexas (se preferir)
function processarDadosComplexos() {
  // Muitas linhas de código
  console.log("Processando...");
  // ...
}