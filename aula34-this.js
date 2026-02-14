// class Pessoa {
//   constructor(nome, idade) {
//     this.nome = nome;      // this.nome = propriedade da instância
//     this.idade = idade;
//   }

//   apresentar() {
//     console.log(`Olá, sou ${this.nome} e tenho ${this.idade} anos.`);
//   }

//   envelhecer() {
//     this.idade += 1;
//     console.log(`${this.nome} envelheceu! Agora tem ${this.idade} anos.`);
//   }
// }

// const ana = new Pessoa("Ana", 28);
// ana.apresentar();    // Olá, sou Ana e tenho 28 anos.
// ana.envelhecer();    // Ana envelheceu! Agora tem 29 anos.


///////////////////

class ErroExemplo {
  constructor(valor) {
    this.valor = valor;
  }

  dobrar() {
    this.valor = this.valor * 2;  // ❌ Cria variável local 'valor' – this.valor não muda!
    //console.log(this.valor); // Ainda o valor original
  }
}

const obj = new ErroExemplo(10);
obj.dobrar();
console.log(obj.valor); // 10 (não dobrou!)