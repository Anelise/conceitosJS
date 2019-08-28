/**
Aqui uma comparação da forma de função comum versus a frma com arrow function.
A primeira vez que vi uma arrow function pareceu bem estranho. Mas depois de um tempo aderi totalmente pela economia de código.
**/
let somaArrayAntigo = function(umArray){
  let acumula = 0;
  
  for(let i=0; i < umArray.length; i++){
      acumula += umArray[i];
  }
  
  return acumula;
  
}

// Quando apenas um comando ele subentende o return e não precisa das chaves
let funcaoArrowAcumula = (acumulado, elemento)=> acumulado + elemento; 
let somaArrayNovo = (outroArray)=>outroArray.reduce(funcaoArrowAcumula,0);


somaArrayAntigo([9,3,6,5]);
somaArrayNovo([9,3,6,5]);

//Me da até uma emoção de tão maravilhosa que ficou a forma nova
