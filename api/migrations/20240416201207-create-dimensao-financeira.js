'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dimensao_financeiras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      guardaDinheiroAtividades: {
        type: Sequelize.STRING
      },
      guardaDinheiroAssociacao: {
        type: Sequelize.STRING
      },
      coberturaGastosAssociacao: {
        type: Sequelize.STRING
      },
      coberturaGastosIndividuais: {
        type: Sequelize.STRING
      },
      dividasFinanceiras: {
        type: Sequelize.STRING
      },
      capacidadePagarDividas: {
        type: Sequelize.STRING
      },
      precoBom: {
        type: Sequelize.STRING
      },
      pagamentoCompensaGastos: {
        type: Sequelize.STRING
      },
      qualidadePreco: {
        type: Sequelize.STRING
      },
      controleGastosProducao: {
        type: Sequelize.STRING
      },
      controleGastosProducaoMetodo: {
        type: Sequelize.STRING
      },
      publicoAlvoVendas: {
        type: Sequelize.STRING
      },
      retornoFinanceiroVendas: {
        type: Sequelize.STRING
      },
      quemDefinePreco: {
        type: Sequelize.STRING
      },
      facilidadeVenderSempre: {
        type: Sequelize.STRING
      },
      conheceLinhaCredito: {
        type: Sequelize.STRING
      },
      usoLinhaCredito: {
        type: Sequelize.STRING
      },
      usoComunidadeLinhaCredito: {
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
    await queryInterface.dropTable('Dimensao_financeiras');
  }
};