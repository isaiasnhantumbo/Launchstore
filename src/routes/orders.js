const express = require('express');
const routes = express.Router();

const OrderController = require('../app/controllers/OrderController');

const { onlyUser } = require('../app/middlewares/session');

routes.post('/', onlyUser, OrderController.post);
routes.get('/', onlyUser, OrderController.index);
routes.get('/sales', onlyUser, OrderController.sales);
routes.get('/:id', onlyUser, OrderController.show);
routes.post('/:id/:action', onlyUser, OrderController.update);
module.exports = routes;
