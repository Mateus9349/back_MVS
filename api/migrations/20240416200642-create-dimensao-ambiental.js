'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dimensao_ambientals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origemMateriais: {
        type: Sequelize.STRING
      },
      periodoSemAtividade: {
        type: Sequelize.STRING
      },
      tempoSemAtividade: {
        type: Sequelize.STRING
      },
      atrapalhaOutraPessoa: {
        type: Sequelize.STRING
      },
      estadoFloresta: {
        type: Sequelize.STRING
      },
      contribuicaoTrabalhoFloresta: {
        type: Sequelize.STRING
      },
      comoContribuicaoTrabalhoFloresta: {
        type: Sequelize.STRING
      },
      utilizaEspecieFloresta: {
        type: Sequelize.STRING
      },
      disponibilidadeEspecieTempo: {
        type: Sequelize.STRING
      },
      facilidadeEncontrarAnimais: {
        type: Sequelize.STRING
      },
      motivoNaoEncontrarAnimais: {
        type: Sequelize.STRING
      },
      cacaConsumoProprio: {
        type: Sequelize.STRING
      },
      impedimentoCaca: {
        type: Sequelize.STRING
      },
      motivosImpedimentoCaca: {
        type: Sequelize.STRING
      },
      ajudaConservacaoAnimais: {
        type: Sequelize.STRING
      },
      motivoNaoAjudarConservacaoAnimais: {
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
    await queryInterface.dropTable('Dimensao_ambientals');
  }
};