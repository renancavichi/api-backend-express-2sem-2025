export const deleteSupplierController = (req, res) => {
  const id = req.params.id
  res.json({message: `Fornecedor com ID ${id} deletado com sucesso!`})
}
