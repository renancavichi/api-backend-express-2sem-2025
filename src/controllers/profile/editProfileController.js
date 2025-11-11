import { update } from "../../models/profileModel.js"

export const editProfileController = async (req, res) => {
  const id = req.params.id
  const profile = req.body

  if (req.userLogged.id !== +id) {
    return res.status(403).json({ message: 'Você não tem permissão para editar este perfil.' })
  }

  const result = await update(+id, profile)

  res.json({
    message: 'Usuário editado com sucesso!',
    profile: result
  })
}
