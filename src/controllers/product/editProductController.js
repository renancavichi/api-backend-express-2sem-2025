export function editProductController(req, res) {
  const id = req.params.id
  const dados = req.body
  res.json({
    message: 'Produto editado com sucesso!',
    product: dados
  })
}