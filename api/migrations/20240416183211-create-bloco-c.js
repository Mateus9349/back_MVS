'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bloco_Cs', {
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
      identificacao: {
        type: Sequelize.STRING
      },
      fonteRenda: {
        type: Sequelize.STRING
      },
      atividadeTrabalho: {
        type: Sequelize.STRING
      },
      rendaAtividade: {
        type: Sequelize.STRING
      },
      tempoAtividade: {
        type: Sequelize.STRING
      },
      motivoTrabalho: {
        type: Sequelize.STRING
      },
      outroMotivoTrabalho: {
        type: Sequelize.STRING
      },
      pessoasTrabalho: {
        type: Sequelize.STRING
      },
      outroTipoPessoas: {
        type: Sequelize.STRING
      },
      localTrabalho: {
        type: Sequelize.STRING
      },
      tempoChegadaTrabalho: {
        type: Sequelize.STRING
      },
      meioTransporte: {
        type: Sequelize.STRING
      },
      horasTrabalhoSafra: {
        type: Sequelize.STRING
      },
      horasTrabalhoSemSafra: {
        type: Sequelize.STRING
      },
      pernoiteLocalTrabalho: {
        type: Sequelize.STRING
      },
      quantidadeNoitesPernoite: {
        type: Sequelize.STRING
      },
      realizaBeneficiamento: {
        type: Sequelize.STRING
      },
      tipoBeneficiamento: {
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
    await queryInterface.dropTable('Bloco_Cs');
  }
};