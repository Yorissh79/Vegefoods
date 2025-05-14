import wishlistModel from "../models/wishlistModel.js";

const getWishlist = async (req, res) => {
    const products = await wishlistModel.find()
    res.json(products)
}

const postWishlist = async (req, res) => {
    const product = await wishlistModel.create(req.body)
    res.json(product)
}

const deleteWishlist = async (req, res) => {
    await wishlistModel.findByIdAndDelete(req.params.id)
    res.json(req.params.id)
}

export { getWishlist, postWishlist, deleteWishlist }