'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cabecalhoMVs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IdentificadorEntrevista: {
        type: Sequelize.STRING
      },
      entrevistador: {
        type: Sequelize.STRING
      },
      dataEntrevista: {
        type: Sequelize.STRING
      },
      duracaoEntrevista: {
        type: Sequelize.STRING
      },
      nomeEntrevistado: {
        type: Sequelize.STRING
      },
      b_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'bloco_bs', key: 'id' }
      },
      c_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'bloco_cs', key: 'id' }
      },
      dados_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'dados_pessoais', key: 'id' }
      },
      intencao_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'intencao_trabalhar_atividades', key: 'id' }
      },
      ambiental_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'dimensao_ambientals', key: 'id' }
      },
      financeira_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'dimensao_financeiras', key: 'id' }
      },
      fisica_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'dimensao_fisicas', key: 'id' }
      },
      humana_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'dimensao_humanas', key: 'id' }
      },
      social_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'dimensao_socials', key: 'id' }
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
    await queryInterface.dropTable('cabecalhoMVs');
  }
};