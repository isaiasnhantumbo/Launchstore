const express = require('express');
const routes = express.Router();

const multer = require('../app/middlewares/multer');

const ProductsController = require('../app/controllers/ProductsController');
const SearchController = require('../app/controllers/SearchController');

const { onlyUser } = require('../app/middlewares/session');

const Validator = require('../app/validators/product');

// SEarch
routes.get('/search', SearchController.index);
// Products
routes.get('/create', onlyUser, ProductsController.create);
routes.get('/:id', ProductsController.show);
routes.get('/:id/edit', onlyUser, ProductsController.edit);

routes.post('/', onlyUser, multer.array('photos', 6,),Validator.post, ProductsController.post);
routes.put('/', onlyUser, multer.array('photos', 6),Validator.put, ProductsController.put);
routes.delete('/', onlyUser, ProductsController.delete);

module.exports = routes;
