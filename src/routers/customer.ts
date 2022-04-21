import express from 'express';
import * as Controller from '../controllers/CustomerController';

const router = express.Router();

/**
 * Get customer
 */
router.get('/:id', Controller.get);

/**
 * Create customer
 */
router.post('/', Controller.create);

/**
 * Update customer
 */
router.put('/:id', Controller.update);

/**
 * Remove customer
 */
router.delete('/:id', Controller.remove);

export default router;
