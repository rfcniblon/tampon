require('dotenv').config();
const request = require("request");

describe(
    "test newsletter entity",
    () => {

        const adminUser = {
            name: "admin1",
            password: "admin1"
            // token: ""
        };

        const newsletter = {
            email : "lycos@aool.fr"
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

//         // on teste la création d'une newsletter
        // it(
        //     "should create a new newsletter",
        //     (done) => {
        //         request.post(
        //             process.env.SERVER_ADDRESS + '/newsletters',
        //             {
        //                 json: true,
        //                 body: newsletter,
        //                 headers: {
        //                     "authorization": adminUser.token
        //                 }
        //             },
        //             (error, response, body) => {
        //                 expect(body.id).toBeGreaterThan(0);
        //                 expect(body.email).toBe(newsletter.email);
        //                 newsletter.id = body.id;
        //                 done();
        //             }
        //         )
        //     }
        // );

        // on teste la MAJ d'une newsletter
        // it("put newsletter", done => {
        //     newsletter.email = "whax@aol.com";
        //     request(
        //         {
        //             method: "put",
        //             json: true,
        //             url: process.env.SERVER_ADDRESS + '/newsletters/' + newsletter.id,
        //             body: newsletter,
        //             headers: {
        //                 "authorization": adminUser.token
        //             }
        //         },
        //         (error, response, body) => {
        //             expect(response.statusCode).toBe(200);
        //             data = body;
        //             expect(body.email).toBe(newsletter.email);
        //             done();
        //         }
        //     );
        // });

       //  on teste la lecture d'une newsletter
        //  it("should get the newsletter", done => {
        //     request.get(
        //          process.env.SERVER_ADDRESS + '/newsletters/' + newsletter.id,
        //         (error, response, body) => {
        //             data.body = JSON.parse(body);
        //             expect(data.body.length).toBe(1);
        //             done();
        //         }
        //     );
        // });

      //  on teste la suppression d'une newsletter
        // it("delete newsletter", done => {
        //     request(
        //         {
        //             method: "delete",
        //             json: true,
        //             url: process.env.SERVER_ADDRESS + '/newsletters/' + newsletter.id,
        //             headers: {
        //                 "authorization": adminUser.token
        //             }
        //         },
        //         (error, response, body) => {
        //             expect(response.statusCode).toBe(200);
        //              done();
        //         }
        //     );
        // });
    }
)
