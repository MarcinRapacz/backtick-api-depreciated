import { DataTypes } from 'sequelize';
import { sequelize } from '../configs/sequelize';

export const Customer = sequelize.define(
  'Customer',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);
