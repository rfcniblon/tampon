const express = require("express");
const parser = require("body-parser");
const router = express.Router();
const connection = require("../config/database");
const verifyToken = require("./verifyToken");

router.use(parser.json());
router.use(parser.urlencoded({
    extended: true
}));

//récupération de l'intégralité de la Table trad_accueil
router.get('/trad_accueil', (req, res) => {
    connection.query('SELECT * FROM trad_accueil',
        (err, results) => {
            if (err) {
                console.log('Dommage!');
            } else {
                console.log('Table trad_accueil recupéré avec succés');
                res.json(results);
            }
        });
});
// selection d'une trad_accueil suivant id
router.get("/trad_accueil/:id", (req, res) => {
    const idTrad_accueil = parseInt(req.params.id);
    const sql = "SELECT * FROM trad_accueil WHERE id = ? ";
    connection.query(sql, idTrad_accueil, (error, results, fields) => {
        if (error) {
            res.status(501).send("couldn't get blog");
            console.log('Dommage!');
        } else {
            console.log("selection d'une trad_accueil suivant id recupéré avec succés");
            res.json(results);
        }
    });
});

//creation d'une traduction
router.post("/trad_accueil", (req, res) => {
    const traduction = req.body;
    const sql = `INSERT INTO trad_accueil (
       banniere_titre,
       banniere_texte,
       banniere_telephone,
       navbar_titre,
       navbar_status_ste,
       navbar_accueil,
       navbar_services,
       navbar_societes,
       navbar_contact,
       navbar_language,
       offre_titre,
       offre_sous_titre,
       offre_texte,
       offre_texte1
       offre_texte2,
       offre_texte3,
       offre_texte4,
       offre_texte5,
       offre_texte6, 
       offre_texte7,
       offre_prix_lancement,
       offre_prix_normal,
       offre_decouvrir,
       offre_precommander,
       offre_texte_condition,
       offre_lien_condition,
       footer_titre,
       footer_telephone,
       footer_email,
       footer_accueil,
       footer_services,
       footer_societe,
       footer_contact,
       footer_newsletter_titre,
       footer_newsletter_texte, 
       footer_newsletter_placeholder,
       footer_reseau,
       footer_banniere
        ) VALUES (
            "${traduction.banniere_titre}", 
            "${traduction.banniere_texte}",
            "${traduction.banniere_telephone}",
            "${traduction.navbar_titre}", 
            "${traduction.navbar_status_ste}",
            "${traduction.navbar_accueil}",
            "${traduction.navbar_services}", 
            "${traduction.navbar_societes}",
            "${traduction.navbar_contact}",
            "${traduction.navbar_language}",
            "${traduction.offre_titre}", 
            "${traduction.offre_sous_titre}",
            "${traduction.offre_texte}",
            "${traduction.offre_texte1}", 
            "${traduction.offre_texte2}",
            "${traduction.offre_texte3}",
            "${traduction.offre_texte4}",
            "${traduction.offre_texte5}", 
            "${traduction.offre_texte6}",
            "${traduction.offre_texte7}",
            "${traduction.offre_prix_lancement}",
            "${traduction.offre_prix_normal}",
            "${traduction.offre_decouvrir}",
            "${traduction.offre_precommander}", 
            "${traduction.offre_texte_condition}",
            "${traduction.offre_lien_condition}",
            "${traduction.footer_titre}",
            "${traduction.footer_telephone}", 
            "${traduction.footer_email}",
            "${traduction.footer_accueil}",
            "${traduction.footer_service}",
            "${traduction.footer_societe}", 
            "${traduction.footer_contact}",
            "${traduction.footer_newsletter_titre}",
            "${traduction.footer_newsletter_texte}", 
            "${traduction.footer_newsletter_placeholder}",
            "${traduction.footer_reseau}",
            "${traduction.footer_banniere}",
        )`;
    connection.query(sql, (error, results, fields) => {
        if (error) {
            res.status(501).send("couldn't post trad_accueil" + error);
            console.log('Erreur de post trad_accueil : ' + error.message);
        } else {
            req.body.id = results.insertId;
            res.json(req.body);
            console.log("creation d'une trad_accueil avec succés");
        }
    });
});

// Modification d'une trad_accueil
router.put("/trad_accueil/:id", (req, res) => {
    const idTrad_accueil= req.params.id;
    const trad = req.body;
    connection.query(
        "UPDATE trad_accueil SET ? WHERE id=?",
        [trad, idTrad_accueil],
        (error, results, fields) => {
            if (error) {
                res.status(501).send("couldn't put trad_accueil" + error);
                console.log('Dommage!');
            } else {
                res.json(req.body);
                console.log("update d'une trad_accueil avec succés");
            }
        }
    );
});
//Suppression d'une trad_accueil
router.delete("/trad_accueil/:id", (req, res) => {
    const idTrad_accueil = req.params.id;
    connection.query(
        "DELETE FROM trad_accueil WHERE id= ?",
        [idTrad_accueil],
        (error, results, fields) => {
            if (error) {
                res.status(501).send("couldn't delete trad_accueil" + error);
                console.log('Dommage!');
            } else {
                res.json(idTraduction);
                console.log("suppression d'une trad_accueil avec succés");
            }
        }
    );
});

module.exports = router;
