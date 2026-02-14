// Exemplo básico: transformar números
//============
// uso do map
// const numeros = [10, 20, 30, 40];


// const dobrados = numeros.map(function(numero) {
//   return numero + 2;
// });
// console.log(dobrados); // [20, 40, 60, 80]


// const triplicados = numeros.map(numero => numero * 3);
// console.log(triplicados); // [30, 60, 90, 120]

//============
// uso do filter

// const idades = [15, 22, 17, 35, 19];
// const maioresDeIdade = idades.filter(idade => idade >= 18);
// console.log(maioresDeIdade); // [22, 35, 19]

// const resultadosTestes = [
//   { nome: "Login válido", passou: true },
//   { nome: "Login inválido", passou: false },
//   { nome: "Cadastro", passou: true },
//   { nome: "Logout", passou: false }
// ];

// const falhados = resultadosTestes.filter(teste => !teste.passou);
// console.log(falhados);
// // [{ nome: "Login inválido", passou: false }, { nome: "Logout", passou: false }]



// uso do find
const usuarios = [
  { id: 1, nome: "Ana", admin: false },
  { id: 2, nome: "João", admin: true },
  { id: 3, nome: "Maria", admin: false }
];

const admin = usuarios.find(usuario => !usuario.admin);
console.log(admin); // { id: 2, nome: "João", admin: true }