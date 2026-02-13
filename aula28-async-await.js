// PROBLEMA: código não espera!

// console.log("1. Abrindo página...");
// // Imagina que isso leva 2 segundos
// console.log("2. Clicando no botão...");
// // Mas essa linha executa IMEDIATAMENTE!
// console.log("3. Validando resultado...");


// Função ASYNC básica
// async function mostrarMensagem() {
//   console.log("1. Primeira mensagem");
//   console.log("2. Segunda mensagem");
//   console.log("3. Terceira mensagem");
// }

// mostrarMensagem();


// CONCEITO: Como será em Playwright
// async function testePlaywright() {
//   console.log("Assim você vai escrever em Playwright:");
//   console.log("");
//   console.log("await page.goto('https://exemplo.com');");
//   console.log("await page.click('#botao');");
//   console.log("await page.fill('#email', 'teste@email.com');");
//   console.log("");
//   console.log("O 'await' faz o código ESPERAR cada ação terminar!");
// }
// testePlaywright();




// Simular ações de teste 
async function abrirPagina(url) {
  console.log(`🌐 Abrindo ${url}...`);
  console.log("✅ Página carregada!");
}

async function clicarBotao(botao) {
  console.log(`🖱️ Clicando em ${botao}...`);
  console.log("✅ Botão clicado!");
}

async function preencherCampo(campo, valor) {
  console.log(`✍️ Preenchendo ${campo} com "${valor}"...`);
  console.log("✅ Campo preenchido!");
}

// Teste completo
async function testeLogin() {
  console.log("🧪 Iniciando teste de login...\n");
  
  await abrirPagina("https://exemplo.com/login");
  await preencherCampo("email", "teste@email.com");
  await preencherCampo("senha", "123456");
  await clicarBotao("botão entrar");
  
  console.log("\n✅ Teste de login concluído!");
}

testeLogin();



// ❌ ERRO: await fora de função async
await esperar(1);

// ✅ CERTO: await dentro de função async
async function teste() {
  await esperar(1);
}