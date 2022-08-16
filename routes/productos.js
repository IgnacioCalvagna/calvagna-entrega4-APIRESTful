const { Router } = require("express");
const productController = require("../controller/productController")
const router = Router();

router.get("/", productController.getAll);
router.get("/:id",productController.getById);
router.post("/add", productController.add);
router.put("/edit/:id", productController.edit);
router.delete("/delete", productController.deleteAll);
router.delete("/delete/:id", productController.deleteById);

module.exports = router;
