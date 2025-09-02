import { remove } from '../../models/profileModel.js'

export const deleteProfileController = async (req, res) => {
  const id = req.params.id

  const result = await remove(+id)

  res.json({message: `Usuário com ID ${id} deletado com sucesso!`,
    profile: result
  })
}
