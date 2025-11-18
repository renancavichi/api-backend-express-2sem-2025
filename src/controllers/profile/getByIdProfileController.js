import { getById, validateProfile } from "../../models/profileModel.js"

export const getByIdProfileController = async (req, res) => {
  const id = req.params.id

  const validation = validateProfile({ id: +id }, { name: true, email: true, pass: true })
    if (!validation.success) {
      return res.status(400).json({
        message: 'Dados inválidos',
        errors: validation.errors
      })
    }
  const result = await getById(validation.data.id)

  res.json({
    message: `Usuário com ID ${id} consultado com sucesso!`,
    profile: result
  })
}
