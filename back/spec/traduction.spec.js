require('dotenv').config();
const request = require("request");

describe(
    "test traduction entity",
    () => {

        const adminUser = {
            name: "admin1",
            password: "admin1"
            // token: ""
        };

        const traduction = {
            banniere_titre : "nolofr0",
            banniere_texte : "images",
            banniere_telephone : "brEEDEDxelles",
            navbar_titre : "000nfr0",
            navbar_status_ste : "mage",
            navbar_accueil : "DEDxelles",
            navbar_services : "00000jnjknr0",
            navbar_societes : "imagesss",
            navbar_contact : "brEEDED",
            navbar_language : "bresil"
        };
        beforeAll(
            (done) => {
              
                const server = require("../server");
                request.post(
                    process.env.SERVER_ADDRESS + "/api/login",
                    {
                        json: true,
                        body: adminUser
                    },
                    (error, response, body) => {
                        adminUser.token = "Bearer " + response.body.token; 
                        done();
                    }
                )
            }
        )

//         // on teste la création d'une traduction
        // it(
        //     "should create a new traduction",
        //     (done) => {
        //         request.post(
        //             process.env.SERVER_ADDRESS + '/traduction',
        //             {
        //                 json: true,
        //                 body: traduction,
        //                 headers: {
        //                     "authorization": adminUser.token
        //                 }
        //             },
        //             (error, response, body) => {
        //                 expect(body.id).toBeGreaterThan(0);
        //                 expect(body.banniere_titre).toBe(traduction.banniere_titre);
        //                 expect(body.banniere_texte).toBe(traduction.banniere_texte);
        //                 expect(body.banniere_telephone).toBe(traduction.banniere_telephone);
        //                 expect(body.navbar_titre).toBe(traduction.navbar_titre);
        //                 expect(body.navbar_status_ste).toBe(traduction.navbar_status_ste);
        //                 expect(body.navbar_accueil).toBe(traduction.navbar_accueil);
        //                 expect(body.navbar_services).toBe(traduction.navbar_services);
        //                 expect(body.navbar_societes).toBe(traduction.navbar_societes);
        //                 expect(body.navbar_contact).toBe(traduction.navbar_contact);
        //                 expect(body.navbar_contact).toBe(traduction.navbar_language);
        //                 traduction.id = body.id;
        //                 done();
        //             }
        //         )
        //     }
        // );

        // on teste la MAJ d'une traduction
        // it("put traduction", done => {
        //     traduction.banniere_titre = "nolofr0";
        //     traduction.banniere_texte = "images";
        //     traduction.banniere_telephone = "brEEDEDxelles";
        //     traduction.navbar_titre = "000nfr0";
        //     traduction.navbar_status_ste = "mage";
        //     traduction.navbar_accueil = "DEDxelles";
        //     traduction.navbar_services = "00000jnjknr0";
        //     traduction.navbar_societes = "imagesss";
        //     traduction.navbar_contact = "brEEDED";
        //     traduction.navbar_language = "brEEDED";
        //     request(
        //         {
        //             method: "put",
        //             json: true,
        //             url: process.env.SERVER_ADDRESS + '/traduction/' + traduction.id,
        //             body: traduction,
        //             headers: {
        //                 "authorization": adminUser.token
        //             }
        //         },
        //         (error, response, body) => {
        //             expect(response.statusCode).toBe(200);
        //             data = body;
        //             expect(body.banniere_titre).toBe(traduction.banniere_titre);
        //             expect(body.banniere_texte).toBe(traduction.banniere_texte);
        //             expect(body.banniere_telephone).toBe(traduction.banniere_telephone);
        //             expect(body.navbar_titre).toBe(traduction.navbar_titre);
        //             expect(body.navbar_status_ste).toBe(traduction.navbar_status_ste);
        //             expect(body.navbar_accueil).toBe(traduction.navbar_accueil);
        //             expect(body.navbar_services).toBe(traduction.navbar_services);
        //             expect(body.navbar_societes).toBe(traduction.navbar_societes);
        //             expect(body.navbar_contact).toBe(traduction.navbar_contact);
      //               expect(body.navbar_contact).toBe(traduction.navbar_language);
        //             done();
        //         }
        //     );
        // });

         // on teste la lecture d'une traduction
        //  it("should get the traduction", done => {
        //     request.get(
        //          process.env.SERVER_ADDRESS + '/traduction/' + traduction.id,
        //         (error, response, body) => {
        //             data.body = JSON.parse(body);
        //             expect(data.body.length).toBe(1);
        //             done();
        //         }
        //     );
        // });

        // on teste la suppression d'une traduction
        it("delete traduction", done => {
            request(
                {
                    method: "delete",
                    json: true,
                    url: process.env.SERVER_ADDRESS + '/traduction/' + traduction.id,
                    headers: {
                        "authorization": adminUser.token
                    }
                },
                (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                     done();
                }
            );
        });
    }
)
