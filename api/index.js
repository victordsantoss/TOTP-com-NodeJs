import Express from "express";
import bodyParser from "body-parser";
import jwt from 'jsonwebtoken';
import { totp } from 'otplib';

/*
    Jwt gerado a partir de um um objeto com dados fictícios, 
    em um ambiente real esse dado seria um Jwt idendticador de um item armarzenado no banco de dados.
*/

import { jwtByPayload } from "./data/fakePayload.js";

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
    Em um ambiente real recomenda-se que a "secret" seja um HASH criptografado e armazenado com segurança no .env
*/
const secret = "KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD";

app.get('/generate-dynamic-jwt', (request, response, next) => {
    console.log(`********** GenerateDynamicUrl **********`);
    try {
        const decoded = jwt.verify(jwtByPayload, secret);
        const newSecret = Buffer.from(`${decoded.id}`).toString('base64');

        const time = totp.timeRemaining();
        const securityToken = totp.generate(newSecret);
        decoded.totpToken = securityToken;
        const newJwt = jwt.sign(decoded, secret);

        response.json({ time: time, newJwt: newJwt })
    } catch (error) {
        console.log(`Generate Dynamica Jwt Error ${error}`);
        next(error);
    }
})

app.listen(8080, () => {
    console.log('Listening in 8080')
})