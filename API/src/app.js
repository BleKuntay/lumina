import express from 'express';
import mongoose from 'mongoose';
import ItemsRoute from "./routes/ItemsRoute.js";

const app = express();
const port = process.env.PORT || 3000;
const uri = "mongodb+srv://applumina35:pyTcD3rTlkabGSTL@luminaapp.q59zl.mongodb.net/?retryWrites=true&w=majority&appName=LuminaApp"

app.use(express.json());

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/api/products', ItemsRoute)

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});