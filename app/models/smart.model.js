module.exports = (sequelize, Sequelize) => {
    const smart = sequelize.define("smart", {
      SN: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      MI: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      caracteristique: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.ENUM('1300€', '900€', '300€', '200€', 'voucher')  // Budget comme énumération
      },
      source: {
        type: Sequelize.ENUM('achat fournisseur', 'achat de la part de t-t')  // Achat comme énumération
      }
    });
  
    return smart;
  };