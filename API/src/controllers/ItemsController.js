import Product from "../models/ProductScema.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        res.status(500).send('Server error');
    }
}

export const getProductDetails = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({
            message: "Error: " + error.message,
        })
    }
}

export const addProduct = async (req, res) => {
    const { title, price, stock } = req.body;

    const product = new Product({
        title: title,
        price: price,
        stock: stock
    });

    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const getViews = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).send('No product with this id');
        }

        return res.status(200).json({
            views: product.views
        });
    } catch (error) {
        return res.status(500).send({
            message: "Error: " + error.message,
        });
    }
};

export const addView = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send('Product not found');

        product.views += 1;
        await product.save();

        res.json({ message: 'View count updated', views: product.views });
    } catch (error) {
        res.status(500).send('Server error');
    }
}