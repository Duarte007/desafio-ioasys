'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      investor_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      balance: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      portfolio_value: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      photo: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      first_access: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      super_angel: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
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
    return queryInterface.dropTable('user');
  }
};
