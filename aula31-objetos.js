// // Criando um objeto simples
// const usuario = {
//   nome: "Ana Silva",
//   email: "ana@teste.com",
//   idade: 28,
//   ativo: true
// };

// //console.log(usuario);



// console.log(usuario.nome);     // Ana Silva
// console.log(usuario.email);    // ana@teste.com



// Objeto com dados de teste para login
// const dadosLoginValido = {
//   email: "usuario@exemplo.com",
//   senha: "Senha123!",
//   perfil: "admin",
//   idade: 12
// };

// console.log("Email de teste:", dadosLoginValido.email);
// console.log("Senha de teste:", dadosLoginValido.senha);
// console.log("Senha de teste:", dadosLoginValido.idade);



const perfilCompleto = {
  nome: "João",
  contato: {
    email: "joao@empresa.com",
    telefone: "(11) 99999-9999"
  },
  hobbies: [
    "testar software", 
    "automação", 
    "café"
]
};

console.log(perfilCompleto.contato.email);         // joao@empresa.com
console.log(perfilCompleto.hobbies[2]);            // testar software