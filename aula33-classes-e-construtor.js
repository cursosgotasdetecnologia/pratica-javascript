// Definindo uma classe simples
// class Pessoa {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }
// }

// // Criando instâncias (objetos)
// const pessoa1 = new Pessoa("Ana", 28);
// const pessoa2 = new Pessoa("João", 35);

// console.log(pessoa1);          // Pessoa { nome: 'Ana', idade: 28 }

// console.log(pessoa2.idade);     // João


//METODOS
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método da classe
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }

  envelhecer(anos = 1) {
    this.idade += anos;
    console.log(`${this.nome} agora tem ${this.idade} anos.`);
  }
}



const ana = new Pessoa("Ana", 28);
ana.apresentar();          // Olá, meu nome é Ana e tenho 28 anos.
ana.envelhecer(2);         // Ana agora tem 30 anos.