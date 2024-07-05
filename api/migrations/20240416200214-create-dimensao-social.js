'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dimensao_socials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      participacaoAssociacao: {
        type: Sequelize.STRING
      },
      relacaoAssociacao: {
        type: Sequelize.STRING
      },
      parceriasInstituicoes: {
        type: Sequelize.STRING
      },
      quaisParcerias: {
        type: Sequelize.STRING
      },
      trabalhoFamilia: {
        type: Sequelize.STRING
      },
      impactoFamilia: {
        type: Sequelize.STRING
      },
      porqueImpactoFamilia: {
        type: Sequelize.STRING
      },
      trabalhoComunidade: {
        type: Sequelize.STRING
      },
      impactoComunidade: {
        type: Sequelize.STRING
      },
      porqueImpactoComunidade: {
        type: Sequelize.STRING
      },
      participacaoJovensDecisoes: {
        type: Sequelize.STRING
      },
      escolasJovens: {
        type: Sequelize.STRING
      },
      envolvimentoJovensRenda: {
        type: Sequelize.STRING
      },
      projetoInatuRendaJovens: {
        type: Sequelize.STRING
      },
      trabalhoMulher: {
        type: Sequelize.STRING
      },
      outrasTrabalhoMulher: {
        type: Sequelize.STRING
      },
      participacaoMulherAtividade: {
        type: Sequelize.STRING
      },
      tarefasMulher: {
        type: Sequelize.STRING
      },
      quaisTarefasMulher: {
        type: Sequelize.STRING
      },
      valorIgualMulher: {
        type: Sequelize.STRING
      },
      valorRecebidoMulher: {
        type: Sequelize.STRING
      },
      incentivoParticipacaoMulher: {
        type: Sequelize.STRING
      },
      comoIncentivoParticipacaoMulher: {
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
    await queryInterface.dropTable('Dimensao_socials');
  }
};