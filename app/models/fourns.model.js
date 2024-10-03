
module.exports = (sequelize, Sequelize) => {
    const Fourns= sequelize.define("fourns", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
          },
        nom: {
            type: Sequelize.STRING
        },

        modelsmartphone: {
            type: Sequelize.STRING
        },

        tel: {
            type:  Sequelize.STRING
        },

        adresse: {
            type: Sequelize.STRING
        },
        matricule: {
            type: Sequelize.STRING
        },
    });
    return Fourns; 
}