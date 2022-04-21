import { DataTypes } from 'sequelize';
import { sequelize } from '../configs/sequelize';
import { ICustomerModel } from './types';

export const Customer = sequelize.define<ICustomerModel>(
  'Customer',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
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
