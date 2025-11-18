import { create, validateProfile } from '../../models/profileModel.js'
import bcrypt from 'bcrypt'

export const createProfileController = async (req, res) => {
  const profile = req.body

  //validar dados
  //validateProfile recebe o objeto profile com dados do usuário e um segundo parâmetro um objeto indicando que a validação é parcial, ou seja, nem todos os campos são obrigatórios.
  const validation = validateProfile(profile, {id: true})
  
  //Verifica se a validação falhou
  if (!validation.success) {
    return res.status(400).json({
      message: 'Dados inválidos',
      errors: validation.errors
    })
  }
  validation.data.pass = await bcrypt.hash(validation.data.pass, 10)

  const result = await create(validation.data)
  res.json({
    message: 'Usuário criado com sucesso!',
    profile: result
  })
}
