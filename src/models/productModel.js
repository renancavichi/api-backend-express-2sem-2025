import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

export const create = async (product) => { 
    return await prisma.product.create({
        data: product
    })
}

export const update = async (id, product) => {
    return await prisma.product.update({
        data: product,
        where: { id }  
    })
}

export const list = async () => {
    return await prisma.product.findMany()
}

export const getById = async (id) => {
    return await prisma.product.findUnique({
        where: { id }
    })
}

export const remove = async (id) => {
    return await prisma.product.delete({
        where: { id }
    })
}
