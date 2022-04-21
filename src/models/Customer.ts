import { DataTypes } from 'sequelize';
import { sequelize } from '../configs/sequelize';
import { ICustomerModel } from './types';

/**
 * @swagger
 *  components:
 *    hidden:
 *      _BaseCustomer:
 *        type: object
 *        required:
 *          - firstName
 *          - lastName
 *        properties:
 *          firstName:
 *            type: string
 *            example: John
 *          lastName:
 *            type: string
 *            example: Doe
 *    schemas:
 *      Customer:
 *        allOf:
 *          - $ref: '#/components/hidden/_BaseCustomer'
 *          - type: object
 *            properties:
 *              id:
 *                type: string
 *                description: The auto-generated id of the customer
 *                example: 8fc85466-d795-4b63-aa8b-a147b77150bb
 *              updatedAt:
 *                type: string
 *                description: The auto-generated date
 *                example: "2022-04-21T22:46:09.744Z"
 *              createdAt:
 *                type: string
 *                description: The auto-generated date
 *                example: "2022-04-21T22:46:09.744Z"
 */
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
