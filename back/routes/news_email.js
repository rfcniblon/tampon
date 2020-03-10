require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const router = express();
const nodemailer = require("nodemailer");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

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

router.post("/news_email", (req, res) => {
    const email = req.body.email;
    const mess_expedit =
        `
    <div>
    Logo
    <h2> Nous venons de prendre en compte l'inscription a nos newsletter, pour suivre nos actualités.
    <h4> <font color="red">Ceci est un message automatique, merci de ne pas repondre. </font></h4>
    Civilités FarmViz
    `;

    const message =
        `
       <div>
        <h2><strong>Demande d'inscription newsletter </strong></h2>
         <h3>Email: ${email}</h3>
         <h4> <font color="red">Ceci est un message automatique, merci de ne pas repondre. </font></h4>
       </div>
        `
    // send mail with defined transport object
    let mailOptions = {
        from: process.env.EMAIL_EXPEDITION, // adresse email expediteur
        to: process.env.EMAIL_EXPEDITION, // adresse email reception
        subject: ' inscription newsletter FarmViz', // Subject line
        html: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {

            res.status(501).send(error);
        }
        else {
            res.status(200).json({
                message: "Votre demande d'inscription à la newsletter a bien été envoyée."
            });
        }
    })

    // envoie email with defined transport object
    let mailOptionsExpedit = {
        from: process.env.EMAIL_EXPEDITION, // adresse email expediteur
        to: req.body.email, // adresse email reception
        subject: ' newsletter FarmViz', // Sujet 
        html: mess_expedit
    };
    transporter.sendMail(mailOptionsExpedit, (error, info) => {
        if (error) {

            res.status(501).send(error);
        }
        else {
            res.status(200).json({
                message: "Votre demande d'inscription à la newsletter a bien été envoyée."
            });
        }
    })

})

module.exports = router;
