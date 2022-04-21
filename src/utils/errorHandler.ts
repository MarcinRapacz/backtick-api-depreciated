import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('@@@@test');

  if (res.headersSent) {
    return next(err);
  }
  return res.status(500).json({ error: err, success: false });
};
