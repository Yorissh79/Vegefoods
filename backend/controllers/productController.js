import productModel from "../models/productModel.js";


const getProducts = async (req, res) => {
    const products = await productModel.find()
    res.json(products)
}

const postProduct = async (req, res) => {
    const product = await productModel.create(req.body)
    res.json(product)
}

const deleteProduct = async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id)
    res.json(req.params.id)
}



export { getProducts, postProduct, deleteProduct }