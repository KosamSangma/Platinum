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

const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found.')
  }
}

productRoutes.route('/:id').get(getProduct)

export default productRoutes
