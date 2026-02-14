// Função reutilizável
export function logarMensagem(mensagem) {
  console.log(`[LOG] ${mensagem}`);
}

// Classe reutilizável
export class UsuarioTeste {
  constructor(email) {
    this.email = email;
  }

  saudar() {
    console.log(`Olá, ${this.email}!`);
  }
}

// Export default (o principal do arquivo)
export default function limparConsole() {
  console.clear();
  console.log("Console limpo!");
}