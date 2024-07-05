'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dimensao_humanas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origemAlimentacao: {
        type: Sequelize.STRING
      },
      gastaDinheiroAlimentos: {
        type: Sequelize.STRING
      },
      acessoAlimentosQualidade: {
        type: Sequelize.STRING
      },
      usoDinheiroAlimentos: {
        type: Sequelize.STRING
      },
      projetoAjudaAlimentacaoAlgumaForma: {
        type: Sequelize.STRING
      },
      aprendizadoNatureza: {
        type: Sequelize.STRING
      },
      outroAprendizadoNatureza: {
        type: Sequelize.STRING
      },
      usoConhecimentosTrabalho: {
        type: Sequelize.STRING
      },
      transmissaoConhecimentos: {
        type: Sequelize.STRING
      },
      quemTransmissaoConhecimentos: {
        type: Sequelize.STRING
      },
      aprendizadoTrabalho: {
        type: Sequelize.STRING
      },
      outroAprendizadoTrabalho: {
        type: Sequelize.STRING
      },
      assistenciaTecnica: {
        type: Sequelize.STRING
      },
      quaisAssistenciaTecnica: {
        type: Sequelize.STRING
      },
      aprendizadoNovo: {
        type: Sequelize.STRING
      },
      quaisAprendizadoNovo: {
        type: Sequelize.STRING
      },
      pessoasConversa: {
        type: Sequelize.STRING
      },
      satisfacaoLocalTrabalho: {
        type: Sequelize.STRING
      },
      satisfacaoBeneficiosTrabalho: {
        type: Sequelize.STRING
      },
      satisfacaoPessoasTrabalho: {
        type: Sequelize.STRING
      },
      reconhecimentoTrabalho: {
        type: Sequelize.STRING
      },
      melhorarVidaTrabalho: {
        type: Sequelize.STRING
      },
      riscosTrabalho: {
        type: Sequelize.STRING
      },
      principaisRiscosTrabalho: {
        type: Sequelize.STRING
      },
      treinamentoSegurancaTrabalho: {
        type: Sequelize.STRING
      },
      qualTreinamentoSegurancaTrabalho: {
        type: Sequelize.STRING
      },
      equipamentoProtecao: {
        type: Sequelize.STRING
      },
      quaisEquipamentoProtecao: {
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
    await queryInterface.dropTable('Dimensao_humanas');
  }
};