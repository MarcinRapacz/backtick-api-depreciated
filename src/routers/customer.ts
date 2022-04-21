import express from 'express';
import * as Controller from '../controllers/CustomerController';

export default express
  .Router()
  .get('/:id', Controller.get)
  .post('/', Controller.create)
  .put('/:id', Controller.update)
  .delete('/:id', Controller.remove);
