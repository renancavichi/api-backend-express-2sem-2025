export const createSupplierController = (req, res) => {
  const dados = req.body
  res.json({
    message: 'Fornecedor criado com sucesso!',
    supplier: dados
  })
}
