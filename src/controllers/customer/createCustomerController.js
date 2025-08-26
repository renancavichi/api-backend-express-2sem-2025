export const createCustomerController = (req, res) => {
  const dados = req.body
  res.json({
    message: 'Cliente criado com sucesso!',
    customer: dados
  })
}
