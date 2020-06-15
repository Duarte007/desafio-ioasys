
const { EnterpriseType } = require('../models');

class EnterpriseTypeController {

  async getEnterpriseType(req, res) {
    try {
      EnterpriseType.findAll()
        .then(users => {
          res.status(200).json({ response: users });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ mgs: "Erro ao buscar lista de tipos de empresas", err });
        });
    } catch (err) {
      res.status(500).json({ mgs: "Erro ao buscar lista de tipos de empresas", err })
    }
  }

  async getEnterpriseTypeByFilter(req, res) {
    try {
      const params = req.body;
      EnterpriseType.findOne({where: params}).then(users => {
        res.status(200).json({ response: users || {} });
      });
    } catch (err) {
      console.log("erro", err)
      res.status(500).json({ mgs: "Erro ao buscar lista de tipos de empresas", err })
    }
  }

  async createEnterpriseType(req, res) {
    try {
      const {
        name,
      } = req.body;
      const enterprise_type_name = name;
      EnterpriseType
        .create({
          enterprise_type_name
        })
        .then((enterpriseType) => {
          console.log('success', enterpriseType.toJSON());
          res.status(200).json({ mgs: "Tipo de empresa cadastrado com sucesso!", enterpriseType: enterpriseType.toJSON() });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ mgs: "Erro ao inserir tipo de empresa.", err });
        });
    } catch (err) {
      console.log(err)
      res.status(500).json({ mgs: "Erro ao inserir tipo de empresa.", err });
    }
  }

}

module.exports = new EnterpriseTypeController(); 