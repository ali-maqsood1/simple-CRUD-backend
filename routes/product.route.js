import express from "express";
const router = express.Router();
import {getAllProducts, getSpecificProduct, createProduct, deleteProduct, updateProduct} from "../controllers/product.controller.js";

router.get('/', getAllProducts);
router.get('/:id', getSpecificProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;