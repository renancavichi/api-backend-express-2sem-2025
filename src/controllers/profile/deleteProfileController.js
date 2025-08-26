export const deleteProfileController = (req, res) => {
  const id = req.params.id
  res.json({message: `Usuário com ID ${id} deletado com sucesso!`})
}
