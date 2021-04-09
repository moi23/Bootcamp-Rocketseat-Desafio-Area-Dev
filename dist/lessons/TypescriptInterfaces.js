"use strict";
// Tipagens no javascript é uma forma de facilitar o desenvolvimento
// do programador, uma vez que os argumentos ou respostas
// estejam tipados, mais fácil de manutenção e até mesmo
// entendimento sobre o contexto é:
function pessoaType1(_a) {
    var nome = _a.nome, humano = _a.humano, idade = _a.idade;
    var data = {
        nome: nome,
        humano: humano,
        idade: idade,
    };
    return data;
}
