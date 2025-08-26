import express from 'express'
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import customerRouter from './routers/customerRouter.js'

const app = express()
const port = 3333

app.use(express.json()) // Converter o JSON que chegou na requisição em um objeto js e vai salvar em req.body

app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/customer', customerRouter)

app.listen(port, () => {
  console.log(`API Rodando em http://localhost:${port}`)  
})
