// Simulação de banco de dados em memória
const usuarios = [
    { id: 1, usuario: 'rogerio.junior@rsterceirizacao.com.br', senha: 'p147258@', perfil: 'admin', nome: 'Rogério Júnior' },
    { id: 2, usuario: 'caua.silva@rsterceirizacao.com.br', senha: 'p147258@', perfil: 'admin', nome: 'Cauã Silva' },
    { id: 3, usuario: 'matheus.sairo@rsterceirizacao.com.br', senha: 'p147258@', perfil: 'admin', nome: 'Matheus Sairo' },
    { id: 4, usuario: 'Portaria Remota', senha: 'p147258@', perfil: 'padrao', nome: 'Portaria Remota' }
];

const chamados = [];

module.exports = {
    usuarios,
    chamados
};