export const deleteCustomerController = (req, res) => {
  const id = req.params.id
  res.json({message: `Cliente com ID ${id} deletado com sucesso!`})
}
