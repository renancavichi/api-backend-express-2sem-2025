import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

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