module.exports = app => {
    const EmpFourns = require("../controllers/fourns_emploiyee.controller");
  
    var router = require("express").Router();
  
    // ================= Routes CRUD Fournisseurs =================
  
    // Créer un nouveau fournisseur
    router.post("/fourns", EmpFourns.createFournisseur);
  
    // Récupérer tous les fournisseurs
    router.get("/fourns", EmpFourns.findAllFournisseurs);
  
    // Récupérer un fournisseur par ID
    router.get("/fourns/:id", EmpFourns.findFournisseurById);
  
    // Mettre à jour un fournisseur par ID
    router.put("/fourns/:id", EmpFourns.updateFournisseur);
  
    // Supprimer un fournisseur par ID
    router.delete("/fourns/:id", EmpFourns.deleteFournisseur);
// Créer un nouvel employé
router.post("/employ", EmpFourns.createEmployee);

// Récupérer tous les employés
router.get("/employ", EmpFourns.findAllEmployees);  // Correction de findAllemploy à findAllEmployees

// Récupérer un employé par ID
router.get("/employ/:id", EmpFourns.findEmployeeById);

// Mettre à jour un employé par ID
router.put("/employ/:id", EmpFourns.updateEmployee);

// Supprimer un employé par ID
router.delete("/employ/:id", EmpFourns.deleteEmployee);




// Utiliser le préfixe /api pour toutes les routes

      app.use('/api/', router);
  };
  