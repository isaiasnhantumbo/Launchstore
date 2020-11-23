const express = require("express");
const routes = express.Router();

const multer = require("../app/middlewares/multer");

const ProductsController = require("../app/controllers/ProductsController");
const SearchController = require("../app/controllers/SearchController");

// SEarch
routes.get("/search", SearchController.index);
// Products
routes.get("/create", ProductsController.create);
routes.get("/:id", ProductsController.show);
routes.get("/:id/edit", ProductsController.edit);

routes.post("/", multer.array("photos", 6), ProductsController.post);
routes.put("/", multer.array("photos", 6), ProductsController.put);
routes.delete("/", ProductsController.delete);

module.exports = routes;
