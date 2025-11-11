import express from 'express'
import { createProductController } from '../controllers/product/createProductController.js'
import { listProductController } from '../controllers/product/listProductController.js'
import { getByIdProductController } from '../controllers/product/getByIdProductController.js'
import { editProductController } from '../controllers/product/editProductController.js'
import { deleteProductController } from '../controllers/product/deleteProductController.js'
import { authenticator } from '../middlewares/authenticator.js'

const router = express.Router()

router.get('/', listProductController)
router.get('/:id', getByIdProductController)
router.use(authenticator)
router.post('/', createProductController)
router.put('/:id', editProductController)
router.delete('/:id', deleteProductController)

export default router