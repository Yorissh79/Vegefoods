import basketModel from "../models/basketModel.js";
import productModel from "../models/productModel.js";

const getBasket = async (req, res) => {
    const products = await basketModel.find()
    res.json(products)
}

const postBasket = async (req, res) => {
    const product = await basketModel.create(req.body)
    res.json(product)
}

const deleteBasket = async (req, res) => {
    await basketModel.findByIdAndDelete(req.params.id)
    res.json(req.params.id)
}

const updateBasket = async (req, res) => {
    await productModel.findByIdAndUpdate(req.params.id, req.body,  {new: true})
    res.json(req.params.id)
}

export { getBasket, postBasket, deleteBasket, updateBasket }