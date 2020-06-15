module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        investor_name: DataTypes.STRING,
        email: DataTypes.STRING,
        city: DataTypes.DATE,
        balance: DataTypes.FLOAT,
        country: DataTypes.DATE,
        photo: DataTypes.DATE,
        first_access: DataTypes.BOOLEAN,
        super_angel: DataTypes.BOOLEAN,
        password: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      underscored: true,
      underscoredAll: true,
      tableName: "user"
    });
  
    return User;
}