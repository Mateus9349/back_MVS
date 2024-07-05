'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dimensao_fisicas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      equipamentosProprios: {
        type: Sequelize.STRING
      },
      facilidadeDeslocarProdutos: {
        type: Sequelize.STRING
      },
      faltaTrabalharMelhor: {
        type: Sequelize.STRING
      },
      oQueFaltaTrabalharMelhor: {
        type: Sequelize.STRING
      },
      equipamentosComunidade: {
        type: Sequelize.STRING
      },
      equipamentosUtilizados: {
        type: Sequelize.STRING
      },
      motivoEquipamentosNaoUtilizados: {
        type: Sequelize.STRING
      },
      equipamentosLugar: {
        type: Sequelize.STRING
      },
      respeitoEspacoTempo: {
        type: Sequelize.STRING
      },
      facilidadeTransportarProdutosColetaArmazenamento: {
        type: Sequelize.STRING
      },
      motivoTransporteProdutosColetaArmazenamento: {
        type: Sequelize.STRING
      },
      facilidadeTransportarProdutosArmazenamentoVenda: {
        type: Sequelize.STRING
      },
      motivoTransporteProdutosArmazenamentoVenda: {
        type: Sequelize.STRING
      },
      comprasUltimosDoisAnos: {
        type: Sequelize.STRING
      },
      dinheiroAtividadesCompras: {
        type: Sequelize.STRING
      },
      facilidadeTransporteCidade: {
        type: Sequelize.STRING
      },
      motivoFacilidadeTransporteCidade: {
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
    await queryInterface.dropTable('Dimensao_fisicas');
  }
};