const db = require("../models");
const Fournisseur = db.fourns;
const Employee = db.employe;
// const Op = db.Sequelize.Op;  // Ajout de Op pour les opérations conditionnelles

// ================= CRUD Fournisseur =================
// Créer un nouveau fournisseur
exports.createFournisseur = (req, res) => {
  // Validate request
  if (!req.body.nom) {  // Correction ici
    return res.status(400).send({
      message: "Le nom et le contact sont requis pour créer un fournisseur !"
    });
  }

  // Create a Fournisseur
  const fournisseur = {
    id: req.body.id,
    nom: req.body.nom,
    modelsmartphone: req.body.modelsmartphone,
    tel: req.body.tel,
    adresse: req.body.adresse,
    matricule:req.body.matricule
  };

  // Save Fournisseur in the database
  Fournisseur.create(fournisseur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur est survenue lors de la création du fournisseur."
      });
    });
};


// Récupérer tous les Fournisseur avec possibilité de filtrer par nom
exports.findAllFournisseurs = (req, res) => {
  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Fournisseur.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur est survenue lors de la récupération des Fournisseur."
      });
    });
};

// Trouver un fournisseur par ID
exports.findFournisseurById = (req, res) => {
  const id = req.params.id;

  Fournisseur.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Impossible de trouver le fournisseur avec l'ID ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erreur lors de la récupération du fournisseur avec l'ID ${id}.`
      });
    });
};

// Mettre à jour un fournisseur
exports.updateFournisseur = (req, res) => {
  const id = req.params.id;

  Fournisseur.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Le fournisseur a été mis à jour avec succès."
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour le fournisseur avec l'ID ${id}. Peut-être qu'il n'existe pas ou que le corps de la requête est vide.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erreur lors de la mise à jour du fournisseur avec l'ID ${id}.`
      });
    });
};

// Supprimer un fournisseur
exports.deleteFournisseur = (req, res) => {
  const id = req.params.id;

  Fournisseur.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Le fournisseur a été supprimé avec succès."
        });
      } else {
        res.send({
          message: `Impossible de supprimer le fournisseur avec l'ID ${id}. Peut-être qu'il n'existe pas.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erreur lors de la suppression du fournisseur avec l'ID ${id}.`
      });
    });
};

// ================= CRUD Employés =================

// Créer un nouvel employé
exports.createEmployee = (req, res) => {
  if (!req.body.nom) {
    return res.status(400).send({
      message: "Le nom  est requis pour créer un employé !"
    });
  }

  const employee = {
    id: req.body.id,
    cin: req.body.cin,
    nom: req.body.nom,
    prenom: req.body.prenom,
    tel: req.body.tel,
    email: req.body.email

  };
  // Save Employee in the database

  Employee.create(employee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur est survenue lors de la création de l'employé."
      });
    });
};

// Récupérer tous les employés avec possibilité de filtrer par poste
exports.findAllEmployees = (req, res) => {
  const position = req.query.position;
  const condition = position ? { position: { [Op.like]: `%${position}%` } } : null;

  Employee.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Une erreur est survenue lors de la récupération des employés."
      });
    });
};

// Trouver un employé par ID
exports.findEmployeeById = (req, res) => {
  const id = req.params.id;

  Employee.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Impossible de trouver l'employé avec l'ID ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erreur lors de la récupération de l'employé avec l'ID ${id}.`
      });
    });
};

// Mettre à jour un employé
exports.updateEmployee = (req, res) => {
  const id = req.params.id;

  Employee.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "L'employé a été mis à jour avec succès."
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour l'employé avec l'ID ${id}. Peut-être qu'il n'existe pas ou que le corps de la requête est vide.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erreur lors de la mise à jour de l'employé avec l'ID ${id}.`
      });
    });
};

// Supprimer un employé
exports.deleteEmployee = (req, res) => {
  const id = req.params.id;

  Employee.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "L'employé a été supprimé avec succès."
        });
      } else {
        res.send({
          message: `Impossible de supprimer l'employé avec l'ID ${id}. Peut-être qu'il n'existe pas.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erreur lors de la suppression de l'employé avec l'ID ${id}.`
      });
    });
};
