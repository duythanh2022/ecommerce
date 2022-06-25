const router = require("express").Router();
const productController = require("../controllers/products.controller");

router.get("/",productController.getAllProduct)
router.post("/t",productController.createNewProduct)
module.exports = router