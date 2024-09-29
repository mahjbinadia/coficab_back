

module.exports = (sequelize, Sequelize) => {
    const admin = sequelize.define("admin", {
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
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    });
  
    admin.prototype.gere_utilisateur = function() {
      // Logique pour gérer un utilisateur
    };
  
    admin.prototype.configuration_systeme = function() {
      // Logique pour configurer le système
    };
  
    admin.prototype.assigner_smart = function() {
      // Logique pour assigner un smartphone
    };
  
    admin.prototype.liberer_smart = function() {
      // Logique pour libérer un smartphone
    };
  
    admin.prototype.assigner_puce = function() {
      // Logique pour assigner une puce
    };
  
    admin.prototype.liberer_puce = function() {
      // Logique pour libérer une puce
    };
  
    return admin;
  };
  