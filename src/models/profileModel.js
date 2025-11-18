import { id } from 'zod/locales'
import { PrismaClient } from '../generated/prisma/index.js'
import * as z from 'zod'

const prisma = new PrismaClient()

// Regras de negócio e validações com Zod
const profileSchema = z.object({
    id: z.number({error: type => type.input === undefined ? "ID é obrigatório." : "ID deve ser um número."})
        .positive("ID deve ser um número positivo."),
    name: z.string({error: type => type.input === undefined ? "Nome é obrigatório." : "Nome deve ser uma string." }) 
        .min(3, "O nome deve ter no mínimo 3 caracteres.")
        .max(100, "O nome deve ter no máximo 100 caracteres."),
    email: z.email("Email inválido."),
    pass: z.string({error: type => type.input === undefined ? "Senha é obrigatória." : "Senha deve ser uma string." }) 
        .min(6, "A senha deve ter no mínimo 6 caracteres.")
        .max(255, "A senha deve ter no máximo 255 caracteres."),
    avatar: z.url("A imagem de Avatar deve ser uma URL válida.").optional()
})

export const validateProfile = (profile, partial = null) => {
    let result
    if (partial) 
        result = profileSchema.partial(partial).safeParse(profile)
    else 
        result = profileSchema.safeParse(profile)
    if (result.success) 
        return { success: true, data: result.data }
    else
        return { success: false, errors: z.flattenError(result.error).fieldErrors }
}


export const create = async (profile) => { 
    return await prisma.user.create({
        data: profile,
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}

export const update = async (id, profile) => {
    return await prisma.user.update({
        data: profile,
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }  
    })
}

export const list = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}

export const getById = async (id) => {
    return await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}

export const getByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email }
    })
}

export const remove = async (id) => {
    return await prisma.user.delete({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
}