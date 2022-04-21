import { Model, Optional } from 'sequelize';

/* 
  CUSTOMER MODEL
*/

interface ICustomerAttributes {
  id: string;
  firstName: string;
  lastName: string;
}

export interface ICustomerModel
  extends Model<ICustomerAttributes, Optional<ICustomerAttributes, 'id'>>,
    ICustomerAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}
