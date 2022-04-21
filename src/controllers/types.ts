import { Request } from 'express';
import { ICustomerModel } from '../models/types';

/* 
    COMMONS
*/
interface IResponse {
  messages: string;
  success: boolean;
}

/* 
  CUSTOMER CONTROLLER
*/

export interface ICustomerRequest extends Request {
  body: {
    id: string;
    firstName: string;
    lastName: string;
  };
}

export interface ICustomerResponse extends IResponse {
  customer: ICustomerModel;
}
