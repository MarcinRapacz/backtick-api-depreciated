import express, { Request, Response } from 'express';

const router = express.Router();

/**
 * Return all customer addresses
 */
router.get('/', (_req: Request, res: Response) => {
  res.status(200).json('Address, ok');
});

export default router;
