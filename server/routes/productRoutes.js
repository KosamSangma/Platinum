import express from 'express'
import Product from '../models/Product.js'
const productRoutes = express.Router()

// const getProducts = async (req, res) => {
//   const products = await Product.find()

//   res.json(products)
// }

// productRoutes.route('/').get(getProducts)

productRoutes.get('/', async (req, res) => {
  await Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json('Error, Data not found!'))
})

// productRoutes.post('/add', async (req, res) => {
//   const name = req.body.name;

//   const newProduct = new Product( {
//     name,
//     price,
//   })

//   await newProduct.Save()
// })

export default productRoutes
