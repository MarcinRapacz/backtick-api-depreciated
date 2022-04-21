import crypto from 'crypto';
import { NextFunction, Response } from 'express';
import { Customer } from '../models/Customer';
import { ICustomerRequest, ICustomerResponse } from './types';

/**
 * @swagger
 *  tags:
 *    name: Customer
 *    description: The customer managing API
 */

/**
 * @swagger
 *  /api/customer:
 *    post:
 *      summary: Create new customer
 *      tags: [Customer]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/_BaseCustomer'
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Created customer
 *                  customer:
 *                    type: object
 *                    $ref: '#/components/schemas/Customer'
 *                  success:
 *                    type: boolean
 *                    example: true
 *        500:
 *          $ref: '#/components/schemas/_ServerError'
 */
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
      message: 'Created customer',
      customer,
    });
  } catch (error) {
    next(`[CustomerController > create] ${error}`);
  }
};

/**
 * @swagger
 *  /api/customer/{:id}:
 *    get:
 *      summary: Returns customer
 *      tags: [Customer]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *            example: 8fc85466-d795-4b63-aa8b-a147b77150bb
 *          required: true
 *          description: The customer id
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Customer details.
 *                  customer:
 *                    type: object
 *                    $ref: '#/components/schemas/Customer'
 *                  success:
 *                    type: boolean
 *                    example: true
 *        404:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Customer not found
 *                  customer:
 *                    type: 'null'
 *                    example: null
 *                  success:
 *                    type: boolean
 *                    example: false
 *        500:
 *          $ref: '#/components/schemas/_ServerError'
 */
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
    const status = customer ? 200 : 404;
    const message = customer ? 'Customer details' : 'Customer not found';

    return res.status(status).json({
      success: !!customer,
      message,
      customer,
    });
  } catch (error) {
    next(`[CustomerController > get] ${error}`);
  }
};

/**
 * @swagger
 *  /api/customer/{:id}:
 *    put:
 *      summary: Update customer
 *      tags: [Customer]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *            example: 8fc85466-d795-4b63-aa8b-a147b77150bb
 *          required: true
 *          description: The customer id
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/_BaseCustomer'
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "Updated customers: 1"
 *                  customer:
 *                    type: 'null'
 *                    example: null
 *                  success:
 *                    type: boolean
 *                    example: true
 *        404:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "Updated customers: 0"
 *                  customer:
 *                    type: 'null'
 *                    example: null
 *                  success:
 *                    type: boolean
 *                    example: false
 *        500:
 *          $ref: '#/components/schemas/_ServerError'
 */
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
    const status = affectedCount ? 200 : 404;

    return res.status(status).json({
      success: !!affectedCount,
      message: `Updated customers: ${affectedCount}`,
      customer: null,
    });
  } catch (error) {
    next(`[CustomerController > update] ${error}`);
  }
};

/**
 * @swagger
 *  /api/customer/{:id}:
 *    delete:
 *      summary: Delete customer
 *      tags: [Customer]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *            example: 8fc85466-d795-4b63-aa8b-a147b77150bb
 *          required: true
 *          description: The customer id
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "Removed customers: 1"
 *                  customer:
 *                    type: 'null'
 *                    example: null
 *                  success:
 *                    type: boolean
 *                    example: true
 *        404:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "Removed customers: 0"
 *                  customer:
 *                    type: 'null'
 *                    example: null
 *                  success:
 *                    type: boolean
 *                    example: false
 *        500:
 *          $ref: '#/components/schemas/_ServerError'
 */
export const remove = async (
  req: ICustomerRequest,
  res: Response<ICustomerResponse>,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const countOfDestroyed = await Customer.destroy({ where: { id } });
    const status = countOfDestroyed ? 200 : 404;

    return res.status(status).json({
      customer: null,
      message: `Removed customers: ${countOfDestroyed}`,
      success: !!countOfDestroyed,
    });
  } catch (error) {
    next(`[CustomerController > remove] ${error}`);
  }
};
