const config = require('../../config/config')
const jwt = require('jsonwebtoken')
const Client = require('./client')

class Auth {
    async verifyJWT(req, res, next){
        try{
            if(req.url.includes('sign_in') || req.url.includes('get_token')) next();
            else {
                const token = req.headers['access-token'];
                const client = req.headers['client'];
                const uid = req.headers['uid'];
                if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
                if (!client) return res.status(401).send({ auth: false, message: 'No client provided.' });
                if (!uid) return res.status(401).send({ auth: false, message: 'No uid provided.' });
    
                const auth = await Client.sendAPIRequest(client)
    
                res.append('access-token', token);
                res.append('client', client);
                res.append('uid', uid);
                
                jwt.verify(token, config.secret, function(err, decoded) {
                    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
                    console.log("Usuario com token jwt válido.");
                    req.userId = decoded.id;
                    next();
                });
            }
        } catch(err){
            return res.status(500).json({ mgs: "Erro ao realizar autenticação", err })
        }
    }
}

module.exports = new Auth().verifyJWT