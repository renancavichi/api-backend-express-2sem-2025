export const createProfileController = (req, res) => {
  const dados = req.body
  res.json({
    message: 'Usuário criado com sucesso!',
    profile: dados
  })
}
