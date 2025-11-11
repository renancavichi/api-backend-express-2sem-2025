import { remove } from '../../models/profileModel.js'

export const deleteProfileController = async (req, res) => {
  const id = req.params.id
  // id vem da url como String, precisa converter para Number
  if (req.userLogged.id !== +id) {
    return res.status(403).json({ message: 'Você não tem permissão para editar este perfil.' })
  }
  const result = await remove(+id) // +id converte para Number ou usar Number(id) ou parseInt(id)
  res.json({message: `Usuário com ID ${id} deletado com sucesso!`,
    profile: result
  })
}
