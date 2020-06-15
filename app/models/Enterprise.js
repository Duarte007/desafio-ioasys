module.exports = (sequelize, DataTypes) => {
    const Enterprise = sequelize.define('Enterprise', {
        enterprise_type_id: DataTypes.STRING,
        name: DataTypes.STRING,
        email_enterprise: DataTypes.FLOAT,
        facebook: DataTypes.STRING,
        twitter: DataTypes.STRING,
        linkedin: DataTypes.STRING,
        phone: DataTypes.STRING,
        own_enterprise: DataTypes.BOOLEAN,
        photo: DataTypes.STRING,
        password: DataTypes.STRING,
        city: DataTypes.STRING,
        country: DataTypes.STRING,
        description: DataTypes.STRING,
        value: DataTypes.FLOAT,
        share_price: DataTypes.FLOAT
    },
    {
      freezeTableName: true,
      underscored: true,
      underscoredAll: true,
      tableName: "enterprise"
    });
  
    return Enterprise;
}