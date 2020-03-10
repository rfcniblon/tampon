require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const router = express();
const nodemailer = require("nodemailer");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

router.post("/devis", (req, res) => {
  let smtp = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_EXPEDITION,
      pass: process.env.PASSWORD,
    }
  };
  let transporter = nodemailer.createTransport(smtp);
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const numero = req.body.numero;
  const adresse = req.body.adresse;
  const code_postal = req.body.code_postal;
  const ville = req.body.ville;
  const telephone = req.body.telephone;
  const email = req.body.email;
  const numero1 = req.body.numero1;
  const adresse1 = req.body.adresse1;
  const code_postal1 = req.body.code_postal1;
  const ville1 = req.body.ville1;
  const numero_parcelle = req.body.numero_parcelle;
  const projet_immobilier = req.body.construction;
  const description = req.body.description;
  const message =
    `
       <div>
        <h1><strong>Information du client</strong></h1>
         <h3>Nom:${nom} </h3>
         <h3>Prenom:${prenom} </h3>
         <h3>Numero:${numero}</h3>
         <h3>Adresse :  ${adresse} </h3>
         <h3>Code postal :  ${code_postal} </h3>
         <h3>Ville :  ${ville}</h3>
         <h3>Telephone: ${telephone} </h3>
         <h3>Email: ${email}</h3>
         <h1> <strong>Adresse de l'intervention</strong></h1>
         <h3>Numero: ${numero1} </h3>
         <h3>Adresse: ${adresse1} </h3>
         <h3>Code postal: ${code_postal1} </h3>
         <h3>Ville: ${ville1} </h3>
         <h3>Numero de la parcelle: ${numero_parcelle} </h3>
         <h3>Avez vous un projet de construction: ${projet_immobilier ? "Oui" : "Non"} </h3>
         <h3>Message: ${description} </h3>
         <h4> <font color="red">Ceci est un message automatique, merci de ne pas repondre. </font></h4>

       
       </div>
        `

  // send mail with defined transport object
  let mailOptions = {
    from: req.body.compte_email, // adresse email expediteur
  //  to: process.env.EMAIL_RECEPTION, // adresse email reception
    subject: ' devis ' + req.body.nom, // Subject line
    // text: "Coucou", // plain text body
    html: message
  };
  // console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {

      res.status(501).send(error);
    }
    else {
      res.status(200).json({
        message: "L'email pour le devis à bien été transmi."
      });
    }
  })
  // res.send('test');
})

module.exports = router;
