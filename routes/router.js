const express = require("express");
const router = express.Router();

const {
    getCategories,
    addCategory,
    deleteCategories,
    showCategory,
    updateCategory,
    deleteCategory,
} = require("../controllers/categoryController");

router.get("/categories", getCategories);
router.post("/categories", addCategory);
router.delete("/categories", deleteCategories);
router.get("/categories/:categoryId", showCategory);
router.patch("/categories/:categoryId", updateCategory);
router.delete("/categories/:categoryId", deleteCategory);

const { getSizes, addSize, deleteSizes, showSize, updateSize, deleteSize } = require("../controllers/sizeController");

router.get("/sizes", getSizes);
router.post("/sizes", addSize);
router.delete("/sizes", deleteSizes);
router.get("/sizes/:sizeId", showSize);
router.patch("/sizes/:sizeId", updateSize);
router.delete("/sizes/:sizeId", deleteSize);

const {
    getGenders,
    addGender,
    deleteGenders,
    showGender,
    updateGender,
    deleteGender,
} = require("../controllers/genderController");

router.get("/genders", getGenders);
router.post("/genders", addGender);
router.delete("/genders", deleteGenders);
router.get("/genders/:genderId", showGender);
router.patch("/genders/:genderId", updateGender);
router.delete("/genders/:genderId", deleteGender);

const {
    getProducers,
    addProducer,
    deleteProducers,
    showProducer,
    updateProducer,
    deleteProducer,
} = require("../controllers/producerController");

router.get("/producers", getProducers);
router.post("/producers", addProducer);
router.delete("/producers", deleteProducers);
router.get("/producers/:producerId", showProducer);
router.patch("/producers/:producerId", updateProducer);
router.delete("/producers/:producerId", deleteProducer);

const {
    getProducts,
    addProduct,
    deleteProducts,
    showProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");

router.get("/products", getProducts);
router.post("/products", addProduct);
router.delete("/products", deleteProducts);
router.get("/products/:productId", showProduct);
router.patch("/products/:productId", updateProduct);
router.delete("/products/:productId", deleteProduct);

const {
    getProductImages,
    addProductImage,
    deleteProductImages,
    showProductImage,
    updateProductImage,
    deleteProductImage,
} = require("../controllers/productImageController");

router.get("/product-images", getProductImages);
router.post("/product-images", addProductImage);
router.delete("/product-images", deleteProductImages);
router.get("/product-images/:productImageId", showProductImage);
router.patch("/product-images/:productImageId", updateProductImage);
router.delete("/product-images/:productImageId", deleteProductImage);

const userController = require("../controllers/user-controller");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);

module.exports = router;
