
const { Enterprise, EnterpriseType } = require('../models');
const  EnterpriseTransformation  = require('../transformations/EnterpriseTransformation');

class EnterpriseController {

  constructor(){
    this.getEnterprises = this.getEnterprises.bind(this);
    this.getEnterprisesByFilter = this.getEnterprisesByFilter.bind(this);
  }

  async get(req, res){
    try{
      if(req.query.constructor === Object && Object.keys(req.query).length !== 0){
        const result = await this.getEnterprisesByFilter(req.query)
        return res.status(200).json({ enterprises: result })
      } else {
        const result = await this.getEnterprises()
        return res.status(200).json({ enterprises: result })
      } 
    } catch (err) {
      return res.status(500).json({ mgs: "Erro ao buscar empresas", err })
    }
  }

  async getEnterprises() {
    try {
      Enterprise.belongsTo(EnterpriseType)
      return Enterprise.findAll({
        include: [{
          model: EnterpriseType,
          required: true
         }]
      })
        .then(enterprises => {
          if(!enterprises)
            return []

          return EnterpriseTransformation.transform(enterprises)
        })
        .catch((err) => {
          console.log(err);
          return Promise.reject(err)
        });
    } catch (err) {
      return Promise.reject(err)
    }
  }

  async getEnterprisesByFilter(params) {
    try {
      if(params.enterprise_types){
        params.enterprise_type_id = params.enterprise_types.split(',')
        delete params.enterprise_types;
      } 
      Enterprise.belongsTo(EnterpriseType)
      return Enterprise.findOne({
        where: params, 
        include: [{
          model: EnterpriseType,
          required: true
        }]}).then(enterprises => {
          if(!enterprises)
            return []

          return EnterpriseTransformation.transform([enterprises])

        // return res.status(200).json({ response: users || {} });
      });
    } catch (err) {
      console.log("erro", err)
      return Promise.reject(err)
    }
  }

  async createEnterprise(req, res) {
    try {
      const {
        enterprise_name,
        photo,
        description,
        city,
        email_enterprise,
        facebook,
        twitter,
        linkedin,
        phone,
        country,
        share_price,
      } = req.body;

      const { enterprise_type } = req.body
      const enterprise_type_id = enterprise_type.id
      Enterprise
        .create({
          enterprise_name,
          photo,
          email_enterprise,
          facebook,
          twitter,
          linkedin,
          description,
          phone,
          city,
          country,
          share_price,
          enterprise_type_id
        })
        .then((enterprise) => {
          console.log('success', enterprise.toJSON());
          res.status(200).json({ mgs: "Empresa cadastrada com sucesso!", enterprise: enterprise.toJSON() });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ mgs: "Erro ao inserir empresa.", err });
        });
    } catch (err) {
      console.log(err)
      res.status(500).json({ mgs: "Erro ao inserir empresa.", err });
    }
  }

}

module.exports = new EnterpriseController(); 