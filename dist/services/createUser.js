"use strict";
// Services são funções
// que fazem algo da regra de negócio
// elas executam algo e retornam algo
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaType2 = exports.PessoasType1 = exports.createUser = void 0;
// Ex:
function createUser(_a) {
    var email = _a.email, name = _a.name, password = _a.password;
    var user = {
        name: name,
        email: email,
        password: password,
    };
}
exports.createUser = createUser;
function PessoasType1(nome, sobrenome, idade) {
    var human = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}
exports.PessoasType1 = PessoasType1;
function PessoaType2(_a) {
    var nome = _a.nome, sobrenome = _a.sobrenome, idade = _a.idade;
    var data = {
        sobrenome: sobrenome,
        idade: idade,
        nome: nome,
    };
}
exports.PessoaType2 = PessoaType2;
