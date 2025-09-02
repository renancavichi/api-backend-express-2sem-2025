import { create } from '../../models/profileModel.js'

export const createProfileController = async (req, res) => {
  const profile = req.body
  const result = await create(profile)
  res.json({
    message: 'Usuário criado com sucesso!',
    profile: result
  })
}
