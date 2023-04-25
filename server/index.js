import dotenv from 'dotenv'
// import connectToDatabase from './database.js'
import express from 'express'
import mongoose from 'mongoose'

//Routes
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err))

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB started!')
})
const app = express()

app.use(express.json())

const port = process.env.PORT || 5000

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.listen(port, () => {
  console.log(`Server runs on port ${port}`)
})
