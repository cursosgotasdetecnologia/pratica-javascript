
// ARQUIVO SEM VARIAVEL - COM CODIGO HARDCODED
test('login válido', async ({ page }) => {
  await page.goto('https://northwind-test-platform.vercel.app/');
  await page.fill('#username', 'admin');
  await page.fill('#password', '123456');
  // ...
});

test('login inválido', async ({ page }) => {
  await page.goto('https://northwind-test-platform.vercel.app/'); // ← REPETIU
  await page.fill('#username', 'admin'); // ← REPETIU
  await page.fill('#password', 'senha-errada');
  // ...
});


/* VARIAVEIS -  ETIQUETAS DE PROTEÇÃO uso do const */

const URL_SISTEMA = 'https://northwind-test-platform.vercel.app/';
const USUARIO_PADRAO = 'admin';
const SENHA_PADRAO = '123456';


test('login válido', async ({ page }) => {
  await page.goto(URL_SISTEMA); // ← Olha a etiqueta!
  await page.fill('#username', USUARIO_PADRAO);
  await page.fill('#password', SENHA_PADRAO);  
});

test('login inválido', async ({ page }) => {
  await page.goto(URL_SISTEMA); // ← Mesma etiqueta!
  await page.fill('#username', USUARIO_PADRAO);   
});


//uso do let
test('login com retry', async ({ page }) => {
  await page.goto(URL_SISTEMA);
  
  let tentativas = 0; // ← Começa em 0
  
  while (tentativas < 3) {
    tentativas++; // ← Vira 1, 2, 3... MUDA durante o teste
    // ...lógica de login
  }
});

var ambiente = 'homologacao';
// ...200 linhas depois...
var ambiente = 'producao'; // ✅ NÃO DÁ ERRO!

