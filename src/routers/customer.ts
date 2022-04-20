import express, { Request, Response } from 'express';

const router = express.Router();

/**
 * Return all customers
 */
router.get('/', (_req: Request, res: Response) => {
  res.status(200).json('Customer, ok');
});

export default router;
