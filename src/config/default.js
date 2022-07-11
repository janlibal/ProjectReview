//import pkg from '../../package.json'

export default env => ({
    env,
    appName:  pkg.name,
    version: pkg.version,
    server: {
        port: process.env.PORT || 7000,
        bodyParser: {
          patchKoa: true,
          urlencoded: true,
          text: false,
          json: true,
          multipart: false,
        },
        cors: {
            origin: '*',
            exposeHeaders: [
              'Authorization',
              'Content-Language',
              'Content-Length',
              'Content-Type',
              'Date',
              'ETag',
            ],
            maxAge: 3600,
          },
          auth: {
            secret: process.env.SECRET || 'test',
            saltRounds: 10,
            createOptions: {
              expiresIn: 60 * 60,
              algorithm: 'HS256',
              issuer: `com.strv.nodejs-nights.${env}`,
            },
            verifyOptions: {
              algorithm: 'HS256',
              issuer: `com.strv.nodejs-nights.${env}`,
            },
          },
          logger: {
            enabled: true,
            stdout: true,
            minLevel: 'debug',
          },
         
          
        }
})
