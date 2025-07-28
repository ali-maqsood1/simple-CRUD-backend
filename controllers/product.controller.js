import Product from "../models/product.model.js";

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({});
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getSpecificProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: "Product not found!"});
        }
        const newProduct = await Product.findById(id);
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id, req.body);
        if(!product){
            return res.status(404).json({message: "Product not found!"});
        }
            res.status(200).json({message: "Product deleted successfully!"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export { getAllProducts, getSpecificProduct, createProduct, deleteProduct, updateProduct };