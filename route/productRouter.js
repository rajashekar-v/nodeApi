const productController = require("../controllers/productController");

const router = require("express").Router();

router.post("/add-product",productController.addProduct);

router.get("/get-all-product",productController.getAllProducts);

router.get("/published",productController.getPublishedProduct);

router.get("/:id",productController.getSingleProduct);

router.put("/:id",productController.updateProduct);

router.delete("/:id",productController.deleteProduct);

module.exports = router;

