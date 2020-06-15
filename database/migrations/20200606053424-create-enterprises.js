'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('enterprise', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      enterprise_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'enterprise_type', 
          key: 'id',
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email_enterprise: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      facebook: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      twitter: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      linkedin: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      own_enterprise: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      photo: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      value: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      share_price: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('enterprise');
  }
};
