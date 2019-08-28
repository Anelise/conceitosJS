/**
Uma função/classe Factory terá a responsabilidade de criar um certo objeto.
Sempre que precisar deve chamar ela, podendo retornar uma nova estancia ou a mesma, dependendo do cenário.

É usado muito para manter uma conexao com banco de dados
**/

function criarPessoa(){

  return {
  nome:'Maria',
  sobrenome:'Do Bairro',
  idade:20,
  cresce: function (){ console.log(this) }
  };
  
}

let p = criarPessoa();
