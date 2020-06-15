const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const { User } = require('../models');
const Client = require('../middlewares/client')
const request = require('request-promise')
const UserTransformation = require('../transformations/UserTransformation')

class AuthController{

    async authenticate(req, res, next){
        try {
            const { authorization } = req.headers
            if (!authorization) throw new Error('You must send an Authorization header')
        
            const [authType, token] = authorization.trim().split(' ')
            if (authType !== 'Bearer') throw new Error('Expected a Bearer token')
        
            const auth = await Client.sendAPIRequest()
            
            console.log("Client autenticado por OAuth2.");

            const uri = `${config.api_url}:${config.api_port}${req.url}`.replace('sign_in', 'get_token')
            console.log(uri)
            const method = req.method
            const body = req.body
        
            const response = await request({
                uri,
                method,
                body,
                json: true,
                headers: {
                    authorization: `${auth.token_type} ${auth.access_token}`
                }
            })

            res.append('access-token', response.token);
            res.append('client', config.client_id);
            res.append('uid', response.user.email);

            const investor = UserTransformation.transform(response.user);

            return res.status(200).json({ investor, enterprise: null, success: true });
        
        } catch (error) {
            return res.status(500).json({ response: error.error });
        }
    }

    async getToken(req, res, next){
        try{
            const user = await User.findOne({where: {email: req.body.email}});

            if(!user)
                return res.status(500).json({response: "Usuário não cadastrado"});
            const token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 600 
            });
            console.log("Token jwt gerado.");
            return res.status(200).json({ token, user });
              
        } catch (err) {
            return res.status(500).json({err});
        }
    }

}

module.exports = new AuthController();

// res.status(200).json({
//     "investor": {
//         "id": 1,
//         "investor_name": "Teste Apple",
//         "email": "testeapple@ioasys.com.br",
//         "city": "BH",
//         "country": "Brasil",
//         "balance": 350000.0,
//         "photo": "/uploads/investor/photo/1/cropped4991818370070749122.jpg",
//         "portfolio": {
//             "enterprises_number": 0,
//             "enterprises": []
//         },
//         "portfolio_value": 350000.0,
//         "first_access": false,
//         "super_angel": false
//     },
//     "enterprise": null,
//     "success": true
// });