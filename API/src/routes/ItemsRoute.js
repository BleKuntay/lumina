import { Router } from 'express';
import {addProduct, addView, getAllProducts, getProductDetails, getViews} from "../controllers/ItemsController.js";

const router = new Router();

// TODO: getProductDetails

router.get('/', getAllProducts);
router.get('/:id', getProductDetails);
router.post('/', addProduct);

router.get('/:id/views', getViews);
router.post('/:id/views', addView);

export default router;