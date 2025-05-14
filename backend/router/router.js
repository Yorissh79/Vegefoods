import express from 'express';
import {deleteProduct, getProducts, postProduct} from "../controllers/productController.js";
import {deleteBasket, getBasket, postBasket} from "../controllers/basketController.js";
import {deleteWishlist, getWishlist, postWishlist} from "../controllers/wishlistController.js";

const router = express.Router();

router

    .get("/products", getProducts)
    .get("/basket", getBasket)
    .get("/wishlist", getWishlist)

    .post("/products", postProduct)
    .post("/basket", postBasket)
    .post("/wishlist", postWishlist)

    .delete("/products/:id", deleteProduct)
    .delete("/basket/:id", deleteBasket)
    .delete("/wishlist/:id", deleteWishlist)

export default router;