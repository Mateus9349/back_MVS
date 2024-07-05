'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('listas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      idade: {
        type: Sequelize.INTEGER
      },
      jovem: {
        type: Sequelize.STRING
      },
      organizacao: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      acao_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'acoes', key: 'id' } 
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
    await queryInterface.dropTable('listas');
  }
};