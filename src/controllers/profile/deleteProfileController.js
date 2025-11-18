import { remove, validateProfile } from '../../models/profileModel.js'

export const deleteProfileController = async (req, res) => {
  const id = req.params.id
  // id vem da url como String, precisa converter para Number
  // +id converte para Number ou usar Number(id) ou parseInt(id)
  const validation = validateProfile({ id: +id }, { name: true, email: true, pass: true})
  if (!validation.success) {
    return res.status(400).json({
      message: 'Dados inválidos',
      errors: validation.errors
    })
  }

  if (req.userLogged.id !== validation.data.id) {
    return res.status(403).json({ message: 'Você não tem permissão para editar este perfil.' })
  }
  const result = await remove(validation.data.id) 
  res.json({message: `Usuário com ID ${id} deletado com sucesso!`,
    profile: result
  })
}
