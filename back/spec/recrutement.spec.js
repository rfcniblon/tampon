require('dotenv').config();
const request = require("request");

describe(
    "test recrutement",
    () => {
        beforeAll(
            (done) => {
                const server = require("../server.js");
                done();
            }
        );

        //    on test si l'url / retourne Ok ?
        it(
            "should return recrutement ?",
            () => {
                request.post(
                    process.env.SERVER_ADDRESS + '/recrutement',
                    (error, response, body) => {
                        expect(response.statusCode).toBe(200);

                    }
                )
            }
        );
    }
)
