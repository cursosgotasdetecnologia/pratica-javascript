// ========================================
 // JEITO RUIM (Sem Page Object)
 // ========================================
 // Imagine isso repetido em 10 arquivos de teste diferentes...
 function testeLoginRuim() {
     console.log("Preenchendo '#user' com 'joao'");
     console.log("Preenchendo '#pass' com '123'");
     console.log("Clicando em '#btn-submit'");
 }


 
 // ========================================
 // JEITO BOM (Com Page Object)
 // ========================================
 
 // 1. Criamos o "Mapa" da página (O Page Object)
 const loginPage = {
     // Elementos (Seletores)
     inputUsuario: "#user",
     inputSenha: "#pass",
     botaoEntrar: "#btn-submit",
 
     // Ações (Métodos)
     logar: function(usuario, senha) {
         console.log(`Preenchendo '${this.inputUsuario}' com '${usuario}'`);
         console.log(`Preenchendo '${this.inputSenha}' com '${senha}'`);
         console.log(`Clicando em '${this.botaoEntrar}'`);
     }
 };

  // 2. O Teste fica limpo e legível
 function testeLoginBom() {
     loginPage.logar("joao", "123");
 }