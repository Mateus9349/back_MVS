'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('acoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tecnico: {
        type: Sequelize.STRING
      },
      acao: {
        type: Sequelize.STRING
      },
      projeto: {
        type: Sequelize.STRING
      },
      codigo: {
        type: Sequelize.STRING
      },
      associacao: {
        type: Sequelize.STRING
      },
      territorio: {
        type: Sequelize.STRING
      },
      data_inicio: {
        type: Sequelize.DATEONLY
      },
      data_fim: {
        type: Sequelize.DATEONLY
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
    await queryInterface.dropTable('acoes');
  }
};