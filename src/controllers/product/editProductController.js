import { update } from "../../models/productModel.js"

export const editProductController = async (req, res) => {
  const id = req.params.id
  const product = req.body
  const result = await update(+id, product)
  res.json({
    message: 'Produto editado com sucesso!',
    product: result
  })
}