/**
  O Observer é um padrão de projeto caracterizado por uma dependência entre objetos. Quando um objeto muda o estado, 
  seus dependentes são notificados e atualizados automaticamente. 
  
  No javascript isso acontece quando se passa uma callback por parâmetro para outro método
  @author Anelise Schunk
**/

let soma2 = (umnumero, outroNumero)=> umnumero + outroNumero;
let soma3 = (umnumero, outroNumero, terceiro)=> terceiro + soma2(umnumero, outroNumero);

soma3(1,2,3);
