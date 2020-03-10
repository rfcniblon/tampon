require('dotenv').config();
const request = require("request");

  describe(
      "test news_email", 
      () => {
          beforeAll( 
              ( done ) => {
                  const server = require("../server.js");
                  done();
              }
          );

      //    on test si l'url / retourne Ok ?
          it( 
              "should return news_email ?", 
              () => {
                  request.post(
                      process.env.SERVER_ADDRESS + '/news_email',
                      (error, response, body) => {
                          expect(response.statusCode).toBe(200);
                          
                      }
                  )
              }
          );
      }
  )
