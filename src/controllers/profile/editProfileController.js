import { update, validateProfile } from "../../models/profileModel.js"

export const editProfileController = async (req, res) => {
  const id = req.params.id
  const profile = req.body

  const validation = validateProfile({ id: +id, ...profile }, {pass: true})
    if (!validation.success) {
      return res.status(400).json({
        message: 'Dados inválidos',
        errors: validation.errors
      })
    }

  if (req.userLogged.id !== validation.data.id) {
    return res.status(403).json({ message: 'Você não tem permissão para editar este perfil.' })
  }

  const result = await update(validation.data.id, validation.data)

  res.json({
    message: 'Usuário editado com sucesso!',
    profile: result
  })
}
