export const getByIdCustomerController = (req, res) => {
  const id = req.params.id
  res.json({message: `Cliente com ID ${id} consultado com sucesso!`})
}
