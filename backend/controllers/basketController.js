import basketModel from "../models/basketModel.js";

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

export { getBasket, postBasket, deleteBasket }