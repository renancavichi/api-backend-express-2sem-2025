import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

export const create = async (profile) => {
    return await prisma.user.create({
        data: profile
    })
}

export const list = async () => {
    return await prisma.user.findMany()
}

export const remove = async (id) => {
    return await prisma.user.delete({
        where: { id }
    })
}