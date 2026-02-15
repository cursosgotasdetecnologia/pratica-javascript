//  function dividir(a, b) {
//    try {
//      if (b === 0) {
//        throw new Error("Divisão por zero não permitida!");
//      }
//      return a / b;
//    } catch (erro) {
//      console.error("Ops! Aconteceu um erro:", erro.message);
//      // Em QA: Tirar um print, registrar log, etc.
//      return null; // Retorna algo seguro
//    } finally {
//      console.log("Operação finalizada.");
//    }
//  }
 
//  //console.log(dividir(10, 2)); // Funciona
//  console.log(dividir(10, 0)); // Cai no catch
// /// console.log("O teste continua..."); // Prova que não quebrou


function calculaBonus(salario) {
   let bonus = 0;
   
   //debugger; // O código vai PAUSAR aqui se estiver em modo debug
   
   if (salario > 2000) {
     bonus = salario * 0.1;
   } else {
     bonus = salario * 0.15;
   }
   
   return bonus;
 }
 
 console.log(calculaBonus(3000));