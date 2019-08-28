/**
Quando se cria uma função, ela terá as informações do "pai" dela ou do ambiente onde ela estava.
**/
let casa = "uma casa";
let umafuncao = function(){console.log(casa)};
let outrafuncao = function(){let casa="outra casa"; umafuncao(); };

outrafuncao();


//Obs. sobre escopo: no front-end o escopo global está em window e no node no global
var umacoisaglobal = "lala"
console.log(window.umacoisaglobal) ou console.log(global.umacoisaglobal)
