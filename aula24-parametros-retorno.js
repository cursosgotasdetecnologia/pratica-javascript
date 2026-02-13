//com parâmetros

// function validarUsuario(nomeUsuario) {
//   console.log("Validando usuário:", nomeUsuario);
// }


// // Chamando com diferentes valores
// validarUsuario("admin");
// validarUsuario("guest");
// validarUsuario("qa_tester");



// Função com 2 parâmetros

// function fazerLogin(email, senha) {
//   console.log("Email:", email);
//   console.log("Senha:", senha);
//   console.log("✅ Login realizado!");
// }


// //fazerLogin("admin@test.com", "senha123");
// fazerLogin("user@test.com", "abc456");


//RETORNO
// Função SEM retorno

// function somar(a, b) {
//   console.log(a + b);
// }

// somar(5, 3); // Mostra 8, mas não posso usar esse valor


// Função COM retorno

// function somar(a, b) {
//   return a + b;
// }


// let resultado = somar(5, 3);
// console.log("Resultado:", resultado); // 8

// Posso usar o resultado!
//let dobro = resultado * 2;
//console.log("Dobro:", dobro); // 16



// Validação que retorna true/false

function emailValido(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}

let email1 = emailValido("testeemail.com");
let email2 = emailValido("teste@email.com");

console.log("Email 1 válido?", email1); 
console.log("Email 2 válido?", email2); 

// Usando o retorno em validação
if (emailValido("qa@test.com")) {
  console.log("✅ Pode prosseguir com o teste!");
} else {
  console.log("❌ Email inválido!");
}

// ==================
// "Dicas importantes:"
// ❌ Ruim
function validar(x, y) {
  return x === y;
}

// ✅ Bom
function validarIgualdade(valorEsperado, valorAtual) {
  return valorEsperado === valorAtual;
}

// ✅ Bom: retorna true/false para validações
function testePassou(resultado) {
  return resultado === "sucesso";
}







/*

= (Atribuição)
É usado para atribuir um valor a uma variável
Ex.: let a = 10;.

== (Igualdade Ampla ou Abstrata)
Compara apenas os valores dos operandos
'Ocorre  conversão de tipo'
3 = "3"

=== (Igualdade Estrita)
Compara os valores e os tipos dos operandos
'Não há conversão de tipo'


*/