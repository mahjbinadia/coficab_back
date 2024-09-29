
module.exports = (sequelize, Sequelize) => {
    const Employe = sequelize.define("employe", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
          },
        cin: {
            type: Sequelize.STRING
        },

        nom: {
            type: Sequelize.STRING
        },

        prenom: {
            type: Sequelize.STRING
        },

        tel: {
            type:  Sequelize.STRING
        },

        email: {
            type: Sequelize.STRING
        },

    });
    return Employe; 

}
