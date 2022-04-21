import crypto from 'crypto';
import { NextFunction, Response } from 'express';
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
      messages: 'Created customer',
      customer,
    });
  } catch (error) {
    next(`[CustomerController > create] ${error}`);
  }
};

// Read one
export const get = async (
  req: ICustomerRequest,
  res: Response<ICustomerResponse>,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const customer = await Customer.findOne({
      where: {
        id,
      },
    });

    return res.status(200).json({
      success: true,
      messages: 'Customer details',
      customer,
    });
  } catch (error) {
    next(`[CustomerController > get] ${error}`);
  }
};

// Update
export const update = async (
  req: ICustomerRequest,
  res: Response<ICustomerResponse>,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    const [affectedCount] = await Customer.update(
      { firstName, lastName },
      { where: { id } }
    );

    return res.status(200).json({
      success: !!affectedCount,
      messages: `Updated customer: ${affectedCount}`,
      customer: null,
    });
  } catch (error) {
    next(`[CustomerController > update] ${error}`);
  }
};

// Delete
export const remove = async (
  req: ICustomerRequest,
  res: Response<ICustomerResponse>,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const countOfDestroyed = await Customer.destroy({ where: { id } });
    return res.status(200).json({
      customer: null,
      messages: `Removed customer: ${countOfDestroyed}`,
      success: !!countOfDestroyed,
    });
  } catch (error) {
    next(`[CustomerController > remove] ${error}`);
  }
};
