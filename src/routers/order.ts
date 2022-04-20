import express, { Request, Response } from 'express';

const router = express.Router();

/**
 * Return all customer orders
 */
router.get('/', (_req: Request, res: Response) => {
  res.status(200).json('Order, ok');
});

export default router;
