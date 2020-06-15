const {Router} = require('express');
const config = require('../config/config')

const routes = Router();

const AuthController = require('../app/controllers/AuthController');
const EnterpriseController = require('../app/controllers/EnterpriseController');
const EnterpriseTypeController = require('../app/controllers/EnterpriseTypeController');

routes.get('/',  (req, res)=> {
    res.send("pong");
});

routes.post(`/api/${config.api_version}/users/auth/sign_in`, AuthController.authenticate);
routes.post(`/api/${config.api_version}/users/auth/get_token`, AuthController.getToken);


routes.get(`/api/${config.api_version}/enterprises`, (req, res) => EnterpriseController.get(req, res));
routes.post(`/api/${config.api_version}/enterprises`, EnterpriseController.createEnterprise);
routes.post(`/api/${config.api_version}/enterprises_type`, EnterpriseTypeController.createEnterpriseType);


module.exports = routes;