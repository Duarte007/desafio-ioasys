module.exports = (sequelize, DataTypes) => {
    const EnterpriseType = sequelize.define('EnterpriseType', {
      enterprise_type_name: DataTypes.STRING
    },
    {
      freezeTableName: true,
      underscored: true,
      underscoredAll: true,
      tableName: "enterprise_type"
    });
  
    return EnterpriseType;
}