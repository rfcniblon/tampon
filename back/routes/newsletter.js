const express = require("express");
const parser = require("body-parser");
const router = express.Router();
const connection = require("../config/database");
//const verifyToken = require("./verifyToken");

router.use(parser.json());
router.use(parser.urlencoded({
    extended: true
}));

//récupération de l'intégralité de la Table newsletter
router.get('/newsletter', (req, res) => {
    connection.query('SELECT * FROM newsletters',
        (err, results) => {
            if (err) {
                console.log('Dommage!');
            } else {
                console.log('Table newsletter recupéré avec succés');
                res.json(results);
            }
        });
});
// selection d'une newsletter suivant id
router.get("/newsletter/:id", (req, res) => {
    const idNewsletter = parseInt(req.params.id);
    const sql = "SELECT * FROM newsletters WHERE id = ? ";
    connection.query(sql, idNewsletter, (error, results, fields) => {
        if (error) {
            res.status(501).send("couldn't get blog");
            console.log('Dommage!');
        } else {
            console.log("selection d'une newsletter suivant id recupéré avec succés");
            res.json(results);
        }
    });
});

//creation d'une newsletter
router.post("/newsletter", (req, res) => {
    const newsletter = req.body;
    const sql = `INSERT INTO newsletters (
       email
        ) VALUES (
            "${newsletter.email}"
        )`;
    connection.query(sql, (error, results, fields) => {
        if (error) {
            res.status(501).send("couldn't post newsletter" + error);
            console.log('Erreur de post newsletter : ' + error.message);
        } else {
            req.body.id = results.insertId;
            res.json(req.body);
            console.log("creation d'une newsletter avec succés");
        }
    });
});

// Modification d'une newsletter
router.put("/newsletter/:id", (req, res) => {
    const idNewsletter= req.params.id;
    const newsletter = req.body;
    connection.query(
        "UPDATE newsletters SET ? WHERE id=?",
        [newsletter, idNewsletter],
        (error, results, fields) => {
            if (error) {
                res.status(501).send("couldn't put newsletter" + error);
                console.log('Dommage!');
            } else {
                res.json(req.body);
                console.log("update d'une newsletter avec succés");
            }
        }
    );
});
//Suppression d'une newsletter
router.delete("/newsletter/:id", (req, res) => {
    const idNewsletter = req.params.id;
    connection.query(
        "DELETE FROM newsletters WHERE id= ?",
        [idNewsletter],
        (error, results, fields) => {
            if (error) {
                res.status(501).send("couldn't delete newsletter" + error);
                console.log('Dommage!');
            } else {
                res.json(idNewsletter);
                console.log("suppression d'une newsletter avec succés");
            }
        }
    );
});

module.exports = router;
