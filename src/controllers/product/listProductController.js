import { list } from '../../models/productModel.js'

export const listProductController = async (req, res) => {
  const result = await list()
  res.json({
    message: 'Produtos consultados com sucesso!',
    products: result
  })
}