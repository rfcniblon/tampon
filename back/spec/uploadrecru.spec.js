require('dotenv').config();
const request = require("request");

describe(
    "test upload",
    () => {
        beforeAll(
            (done) => {
                const server = require("../server.js");
                done();
            }
        );

        //    on test si l'url / retourne Ok ?
        it(
            "should return uploadimg ?",
            () => {
                request.post(
                    process.env.SERVER_ADDRESS + '/uploadrecru',
                    (error, response, body) => {
                        expect(response.statusCode).toBe(200);

                    }
                )
            }
        );
    }
)
