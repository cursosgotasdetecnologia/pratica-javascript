 //"O loop **for** é o mais tradicional

// Loop for básico

// for (let i = 0; i < 15; i++) {
//   console.log("Execução número:", i);

// }

// Executar teste múltiplas vezes

// for (let i = 1; i <= 3; i++) {
//   console.log(`🧪 Executando teste ${i}...`);
//   console.log("✅ Teste passou!");
// }


// Iterar sobre array com for
// let navegadores = ["Chrome", "Firefox", "opera", "Edge", "Safari"];

// for (let i = 0; i < navegadores.length; i++) {
//   console.log("Testando no navegador:", navegadores[i]);
// }


//forEach
// let usuarios = ["admin", "user1", "user2", "guest"];

// usuarios.forEach((usuario) => {
//   console.log("Validando usuário:", usuario);
// });


// Cenário 1: Validar status codes

// let statusCodes = [200, 201, 404, 500];

// statusCodes.forEach((status) => {
//   if (status >= 200 && status < 300) {
//     console.log(`✅ Status ${status}: Sucesso`);
//   } else {
//     console.log(`❌ Status ${status}: Erro`);
//   }
// });


// "Cenário 2: Processar dados de teste:"
// Processar múltiplos usuários

let usuariosTeste = [
  { nome: "Admin", email: "admin@test.com" },
  { nome: "User1", email: "user1@test.com" },
  { nome: "Guest", email: "guest@test.com" }
];

usuariosTeste.forEach((usuario) => {
  console.log(`📧 Testando login de ${usuario.nome}`);
  console.log(`   Email: ${usuario.email}`);
  console.log("   ✅ Login OK!");
});


/* "Quando usar cada um?"
Use for quando:
- Precisa do índice com frequência
- Quer controle total (pular elementos, parar no meio)
*/

/* **Use forEach quando:**
- Quer iterar sobre **todo** o array
- Código mais limpo e legível 
*/

// forEach é mais comum em testes modernos
let testes = ["teste1", "teste2", "teste3"];

testes.forEach((teste) => {
  console.log(`Executando ${teste}`);
});