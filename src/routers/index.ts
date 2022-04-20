import express from 'express';
import AddressRouter from './address';
import CustomerRouter from './customer';
import OrderRouter from './order';
import ProductRouter from './product';

const router = express.Router();

router.use('/address', AddressRouter);
router.use('/customer', CustomerRouter);
router.use('/order', OrderRouter);
router.use('/product', ProductRouter);

export default router;
