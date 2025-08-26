export const getByIdProductController = (req, res) => {
  const id = req.params.id
  res.json({message: `Produto com ID ${id} consultado com sucesso!` })
}