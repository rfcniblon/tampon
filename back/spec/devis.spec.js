require('dotenv').config();
const request = require("request");

  describe(
      "test devis", 
      () => {
          beforeAll( 
              ( done ) => {
                  const server = require("../server.js");
                  done();
              }
          );

      //    on test si l'url / retourne Ok ?
          it( 
              "should return devis ?", 
              () => {
                  request.post(
                      process.env.SERVER_ADDRESS + '/devis',
                      (error, response, body) => {
                          expect(response.statusCode).toBe(200);
                          
                      }
                  )
              }
          );
      }
  )
