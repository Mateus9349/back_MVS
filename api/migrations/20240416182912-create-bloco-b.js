'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bloco_Bs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cidadeNascimento: {
        type: Sequelize.STRING
      },
      estadoNascimento: {
        type: Sequelize.STRING
      },
      cidadeAtual: {
        type: Sequelize.STRING
      },
      localidadeAtual: {
        type: Sequelize.STRING
      },
      tempoMoraLocal: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.STRING
      },
      estadoCivil: {
        type: Sequelize.STRING
      },
      temFilhos: {
        type: Sequelize.STRING
      },
      quantidadeFilhos: {
        type: Sequelize.STRING
      },
      nivelEscolaridade: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      usaComputador: {
        type: Sequelize.STRING
      },
      acessoInternet: {
        type: Sequelize.STRING
      },
      conexaoInternet: {
        type: Sequelize.STRING
      },
      localConexaoInternet: {
        type: Sequelize.STRING
      },
      conheceProgramas: {
        type: Sequelize.STRING
      },
      quaisProgramas: {
        type: Sequelize.STRING
      },
      participaProgramas: {
        type: Sequelize.STRING
      },
      satisfacaoProgramas: {
        type: Sequelize.STRING
      },
      porqueInsatisfacao: {
        type: Sequelize.STRING
      },
      expectativasProjeto: {
        type: Sequelize.STRING
      },
      satisfacaoProjeto: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bloco_Bs');
  }
};