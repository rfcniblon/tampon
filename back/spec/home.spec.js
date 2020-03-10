require('dotenv').config();
const request = require("request");

describe(
    "test home", 
    () => {
        beforeAll( 
            ( done ) => {
                const server = require("../server.js");
                done();
            }
        );

        // on test si l'uri / retourne Ok ?
        it( 
            "should return Ok ?", 
            () => {
                request.get(
                    process.env.SERVER_ADDRESS, 
                    (error, response, body) => {
                        expect(body).toBe("Ok ?");
                    }
                )
            }
        );
    }
)