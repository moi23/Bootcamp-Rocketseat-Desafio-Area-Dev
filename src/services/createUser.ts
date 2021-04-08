// Services são funções
// que fazem algo da regra de negócio
// elas executam algo e retornam algo

// Ex:

export function createUser({ email, name, password }: UserInterf) {
  const user = {
    name,
    email,
    password,
  };
}

export function PessoasType1(nome: String, sobrenome: String, idade: Number) {
  const human = {
    nome,
    sobrenome,
    idade,
  };
}

interface PessoaInterf {
  nome: String;
  sobrenome: String;
  idade: Number;
}

export function PessoaType2({ nome, sobrenome, idade }: PessoaInterf) {
  const data = {
    sobrenome,
    idade,
    nome,
  };
}
