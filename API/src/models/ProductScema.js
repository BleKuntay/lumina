import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    itemNumber: String,
    price: Number,
    views: { type: Number, default: 0 }
});

const Product = mongoose.model('Product', productSchema);

export default Product;