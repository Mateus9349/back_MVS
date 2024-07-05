'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Intencao_trabalhar_atividades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      silvicultura: {
        type: Sequelize.STRING
      },
      tecnicasSilvicultura: {
        type: Sequelize.STRING
      },
      tempoManejo: {
        type: Sequelize.STRING
      },
      interesseAtividades: {
        type: Sequelize.STRING
      },
      conhecimentoAtividade: {
        type: Sequelize.STRING
      },
      motivoInteresse: {
        type: Sequelize.STRING
      },
      outroMotivoInteresse: {
        type: Sequelize.STRING
      },
      ouviuCertificacao: {
        type: Sequelize.STRING
      },
      produtosCertificados: {
        type: Sequelize.STRING
      },
      produtosOrganicos: {
        type: Sequelize.STRING
      },
      motivosCertificacao: {
        type: Sequelize.STRING
      },
      concordanciaCertificacao: {
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
    await queryInterface.dropTable('Intencao_trabalhar_atividades');
  }
};