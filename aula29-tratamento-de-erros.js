// // Código que dá erro (sem tratamento)

// function dividir(a, b) {
//   if (b === 0) {
//     throw new Error("Não pode dividir por zero!");
//   }
//   return a / b;
// }

// Isso vai dar erro!
// let resultado = dividir(10, 0);
// console.log(resultado);


// try {
//   console.log("Tentando dividir...");
//   let resultado = dividir(10, 0);
//   console.log("Resultado:", resultado);
// } catch (erro) {
//   console.log("❌ Erro capturado:", erro.message);
// }

// console.log("✅ Código continuou executando!");


// Validar elemento (pode não existir)
// function validarElemento(elemento) {
//   if (!elemento) {
//     throw new Error("Elemento não encontrado!");
//   }
//   console.log("✅ Elemento válido!");
// }

// try {
//   validarElemento(null); // Vai dar erro
// } catch (erro) {
//   console.log("⚠️ Erro no teste:", erro.message);
//   console.log("📝 Registrando no log...");
// }

// Teste com cleanup garantido

async function testeComLimpeza() {
  console.log("🚀 Iniciando teste...");
  
  try {
    console.log("📝 Criando dados de teste...");
    console.log("🔍 Executando validações...");
    
    // Simula erro
    throw new Error("Elemento não encontrado!");
    
  } catch (erro) {
    console.log("❌ Erro:", erro.message);
    console.log("📸 Tirando screenshot do erro...");
    
  } finally {
    console.log("🧹 Limpando dados de teste...");
    console.log("🔒 Fechando navegador...");
    console.log("✅ Cleanup concluído!");
  }
}

testeComLimpeza();