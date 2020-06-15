
const { User } = require('../models');

class UserController {

  async getUsers(req, res) {
    try {
      User.findAll()
        .then(users => {
          res.status(200).json({ response: users });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ mgs: "Erro ao buscar lista de usuários", err });
        });
    } catch (err) {
      res.status(500).json({ mgs: "Erro ao buscar usuários", err })
    }
  }

  async getUsersByFilter(req, res) {
    try {
      const params = req.body;
      User.findOne({where: params}).then(users => {
        res.status(200).json({ response: users || {} });
      });
    } catch (err) {
      console.log("erro", err)
      res.status(500).json({ mgs: "Erro ao buscar usuários", err })
    }
  }

  async createUser(req, res) {
    try {
    
      const {
        name,
        nickname,
        cpf_cnpj,
        email,
        password,
        avatar,
        active
      } = req.body;

      User
        .create({
          name,
          nickname,
          cpf_cnpj,
          email,
          password,
          avatar,
          active
        })
        .then((user) => {
          console.log('success', user.toJSON());
          res.status(200).json({ mgs: "Usuário cadastrado com sucesso!", user: user.toJSON() });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ mgs: "Erro ao inserir usuário", err });
        });
    } catch (err) {
      console.log(err)
      res.status(500).json({ mgs: "Erro ao inserir usuário", err });
    }
  }

  async updateUser(req, res) {
    try {
    
      const userId = req.params.userId;
      const params = req.body;
      User.update(params , {
        where: {
          id: userId
        }
      }).then(() => {
        res.status(200).json({ mgs: "Usuário atualizado com sucesso!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ mgs: "Erro ao atualizar usuário", err });
      });
    } catch (err) {
      res.status(500).json({ mgs: "Erro ao atualizar usuário" });
    }
  }

  async removeUser(req, res) {
    try {
      const userId = req.params.userId;
      User.destroy({
        where: {
          id: userId
        }
      }).then((user) => {
        res.status(200).json({ mgs: "Usuário removido com sucesso!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ mgs: "Erro ao remover usuário", err });
      });
    } catch (err) {
      res.status(500).json({ mgs: "Erro ao remover usuário" });
    }
  }

}

module.exports = new UserController(); 