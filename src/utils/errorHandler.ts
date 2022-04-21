import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

/**
 * @swagger
 *  components:
 *    schemas:
 *      _ServerError:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: ErrorRequestHandler
 *                    example: Error object
 *                  success:
 *                    type: boolean
 *                    example: false
 */

export const errorHandler = (
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }
  return res.status(500).json({ message: err, success: false });
};
