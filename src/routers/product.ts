import express, { Request, Response } from 'express';

const router = express.Router();

/**
 * Return all products
 */
router.get('/', (_req: Request, res: Response) => {
  res.status(200).json('Product, ok');
});

export default router;
