const express = require("express");
const routes = express.Router();

const multer = require("../app/middlewares/multer");

const ProductsController = require("../app/controllers/ProductsController");
const SearchController = require("../app/controllers/SearchController");

const { onlyUser } = require("../app/middlewares/session");

// SEarch
routes.get("/search", SearchController.index);
// Products
routes.get("/create", onlyUser, ProductsController.create);
routes.get("/:id", ProductsController.show);
routes.get("/:id/edit", onlyUser, ProductsController.edit);

routes.post("/", onlyUser, multer.array("photos", 6), ProductsController.post);
routes.put("/", onlyUser, multer.array("photos", 6), ProductsController.put);
routes.delete("/", onlyUser, ProductsController.delete);

module.exports = routes;
