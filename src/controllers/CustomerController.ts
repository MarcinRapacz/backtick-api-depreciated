import crypto from 'crypto';
import { NextFunction, Request, Response } from 'express';
import { Customer } from '../models/Customer';
import { ICustomerRequest, ICustomerResponse } from './types';

// Create
export const create = async (
  req: ICustomerRequest,
  res: Response<ICustomerResponse>,
  next: NextFunction
) => {
  try {
    const { firstName, lastName } = req.body;
    const customer = await Customer.create({
      id: crypto.randomUUID(),
      firstName,
      lastName,
    });

    return res.status(201).json({
      success: true,
      messages: 'Created client',
      customer,
    });
  } catch (error) {
    next(`[CustomerController > create] ${error}`);
  }
};

// Read one
export const get = (req: Request, res: Response) => {
  return res.status(200).json('Get client');
};

// Update
export const update = (req: Request, res: Response) => {
  return res.status(200).json('Get client');
};

// Delete
export const remove = (req: Request, res: Response) => {
  return res.status(200).json('Get client');
};
