const Product = require("../models/products");

productController = {
    //get all product
    getAllProduct : async (req,res)=>{
        try {
            const getProduct = await Product.find()
            res.status(200).json(getProduct)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    createNewProduct: async (req,res) =>{
        try {
            const newProduct = await Product.create({
                name: req.body.name,
                description: req.body.description,
                // price: req.body.price,
                // image: req.body.image,
                // category: req.body.category,
                // brand: req.body.brand,
                // status: req.body.status
            })
            res.status(200).json(newProduct)
        } catch (error) {
            res.status(500).json(error)
            console.log('Error connecting to database' + error.message );

        }
    }
}
module.exports = productController;
