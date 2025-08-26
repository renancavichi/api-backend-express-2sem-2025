export const deleteProductController = (req, res) => {
  const id = req.params.id
  res.json({message: `Produto com ID ${id} deletado com sucesso!`})
}