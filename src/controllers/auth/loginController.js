import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { getByEmail } from '../../models/profileModel.js'

export const loginController = async (req, res) => {
    // receber o email e a senha
    const { email, pass } = req.body

    // comparar se o email e a senha batem com o que está no banco de dados
    const user = await getByEmail(email)
    if (!user) {
        console.error('Usuário não encontrado para o email:', email)
        return res.status(401).json({ message: 'Email ou Senha Inválida' })
    }

    const passOk = await bcrypt.compare(pass, user.pass)
    if (!passOk) {
        console.error('Senha inválida')
        return res.status(401).json({ message: 'Email ou Senha Inválida' })
    }

    // se bater, gerar um token (JWT)
    const token = await jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' })
    if (!token) {
         return res.status(500).json({ message: 'Erro ao gerar o Token de acesso!' })
    }

    // enviar o token para o cliente
    return res.status(200).json({
        profile: {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar
        },
        token
    })
}