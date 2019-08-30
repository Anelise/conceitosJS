/**
O padrão chain of responsability significa que cada pedaço da função vai rodar independentepente e quando terminar a função next será chamada
**/

function passo1(contexto, next){
  contexto.umvalor=325;
  next();
}

function passo2(contexto, next){
  contexto.outrovalor=63;
  next();
}

function passo3(contexto, next){
  contexto.maisoutrovalor=6;
}

 const exec = (contexto, ...middlewares) => {
  const execPasso = indice =>  
    middlewares && indice < middlewares.length && middlewares[indice](contexto, ()=> execPasso(indice+1) ) ;
  execPasso(0);
}


let contexto = {};
exec(contexto, passo1, passo2, passo3);
console.log(contexto);
