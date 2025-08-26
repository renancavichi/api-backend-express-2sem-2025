export const editProfileController = (req, res) => {
  const id = req.params.id
  const dados = req.body
  res.json({
    message: 'Usuário editado com sucesso!',
    profile: dados
  })
}
