
module.exports = (sequelize, Sequelize) => {
    const Puce = sequelize.define("puce", {
      SNP: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      num_tel: {
        type: Sequelize.STRING
      },
      forfait: {
        type: Sequelize.ENUM('80', '50', '40', '20')  // Forfait comme énumération
      },
      statut: {
        type: Sequelize.ENUM('Active', 'desactive')  // Statut comme énumération
      }
    });
  
    return Puce;
  };