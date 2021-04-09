// Tipagens no javascript é uma forma de facilitar o desenvolvimento
// do programador, uma vez que os argumentos ou respostas
// estejam tipados, mais fácil de manutenção e até mesmo
// entendimento sobre o contexto é:

// para definir uma tipagem siga o exemplo:

// EX:

interface Pessoa {
  nome: String;
  idade: Number;
  humano: Boolean;
}

function pessoaType1({ nome, humano, idade }: Pessoa) {
  const data = {
    nome,
    humano,
    idade,
  };

  return data;
}
