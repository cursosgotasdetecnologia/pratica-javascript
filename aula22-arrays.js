// Criando arrays

// // Array de URLs para testar
// let urlsParaTestar = [
//   "https://exemplo.com/login",
//   "https://exemplo.com/cadastro",
//   "https://exemplo.com/perfil",
//   "https://northwind-test-platform.vercel.app/",
//   2
// ];

// console.log(urlsParaTestar);

// Array de números
// let statusCodes = [200, 404, 500, 201];

// // Array de strings (textos)
// let usuarios = ["admin", "user1", "user2", "qa_tester"];

// // Array de booleanos
// let testesPassaram = [true, true, false, true];

// console.log("Status codes:", statusCodes);
// console.log("Usuários:", usuarios);
// console.log("Testes passaram:", testesPassaram);


////


// Acessando elementos por índice

// let navegadores = ["Chrome", "Firefox", "Edge", "Safari","Gotas de tecnologia"];
// // Índice:        0          1         2        3

// console.log("Primeiro navegador:", navegadores[0]); // Chrome
// console.log("Segundo navegador:", navegadores[1]);  // Firefox
// console.log("Terceiro navegador:", navegadores[2]); // Edge
// console.log("Quinto navegador:", navegadores[4]);   

//

// // Cenário de QA: validar primeiro e último usuário

// let usuariosParaTestar = ["admin", "user1", "user2", "guest"];

// let primeiroUsuario = usuariosParaTestar[0];
// let ultimoUsuario = usuariosParaTestar[3];

// console.log("Testar com:", primeiroUsuario); // admin
// console.log("Testar também com:", ultimoUsuario); // guest

//

// Propriedade length

// let ambientes = ["dev", "staging", "production","dev", "staging", "production"];
// console.log("Quantidade de ambientes:", ambientes.length); // 3



// Cenário de QA: validar se há dados suficientes

// let dadosDeTeste = ["user1@test.com", "user2@test.com"];

// if (dadosDeTeste.length != 2) {
//   console.log("✅ Temos dados para testar!");
//   console.log("Total de dados:", dadosDeTeste.length);
// } else {
//   console.log("❌ Sem dados de teste!");
// }

//
let urls = ["home", "login", "dashboard", "logout"];

// Último elemento = length - 1 (porque começa em 0)
let ultimaUrl = urls[urls.length - 2];

console.log("Última URL:", ultimaUrl); // logout
