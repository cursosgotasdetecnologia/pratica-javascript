// ========================================
// Exemplo OOP Completo
// ========================================

// === ENCAPSULAMENTO ===
// Tudo relacionado a uma "página" fica dentro da classe
// O aluno/teste NÃO acessa diretamente os locators ou detalhes internos
class PaginaBase {
  // Propriedades "privadas" por convenção (encapsulamento)
  _urlBase = "https://meusite.com";          // nunca acessar direto
  _timeoutPadrao = 10000;                    // protegido

  constructor(nomePagina) {
    this.nome = nomePagina;                  // público
    this._estado = "carregando";             // privado por convenção
  }

  // Método público: interface limpa (abstração)
  async carregar() {
    console.log(`[BASE] Carregando ${this.nome} em ${_urlBase}${this._caminho || ""}`);
    this._estado = "carregada";              // muda estado interno (encapsulamento)
    await this._esperarCarregamento();       // chama método privado
  }

  // Método privado (encapsulamento total – só a classe usa)
  async _esperarCarregamento() {
    console.log(`   ⏳ Esperando ${_timeoutPadrao}ms...`);
    
  }

  getEstado() {
    return this._estado;                     // acesso controlado ao estado interno
  }
}

















// === HERANÇA + POLIMORFISMO + ABSTRAÇÃO ===
// PáginaLogin herda tudo da base e adiciona comportamento específico
class PaginaLogin extends PaginaBase {
  constructor() {
    super("Página de Login");                // HERANÇA: chama constructor pai
    this._caminho = "/login";                // adiciona o que é específico

    // Locators encapsulados – ninguém fora da classe sabe deles
    this._campoEmail = "#email";
    this._campoSenha = "#senha";
    this._botaoEntrar = "button#entrar";
  }

  // POLIMORFISMO: sobrescreve (override) o método da classe pai
  async carregar() {
    // Chama o da base primeiro (reuso via herança)
    await super.carregar();

    // Adiciona comportamento específico
    console.log(`   🔐 Verificando se é tela de login...`);
    this._estado = "pronta-para-login";
  }

  // Método específico (abstração: o teste só chama isso)
  async fazerLogin(email, senha) {
    if (this.getEstado() !== "carregada") {
      console.log("Página não carregada ainda!");
      return;
    }

    console.log(`   ✍️ Preenchendo ${this._campoEmail} com ${email}`);
    console.log(`   ✍️ Preenchendo ${this._campoSenha} com ***`);
    console.log(`   🔘 Clicando em ${this._botaoEntrar}`);
    
    // Simula resultado
    console.log("✅ Login realizado com sucesso!");
    this._estado = "logado";
  }
}

// === USO NO TESTE (como o aluno/QA usaria) ===
const paginaLogin = new PaginaLogin();

// O teste NÃO sabe de locators, timeouts ou caminhos internos
// Só usa a interface pública (ABSTRAÇÃO total)
paginaLogin.carregar();          // chama o método polimórfico
paginaLogin.fazerLogin("user@exemplo.com", "123456");

console.log("Estado final:", paginaLogin.getEstado());  // "logado"