import express from 'express'
import { createCustomerController } from '../controllers/customer/createCustomerController.js'
import { listCustomerController } from '../controllers/customer/listCustomerController.js'
import { getByIdCustomerController } from '../controllers/customer/getByIdCustomerController.js'
import { editCustomerController } from '../controllers/customer/editCustomerController.js'
import { deleteCustomerController } from '../controllers/customer/deleteCustomerController.js'

const router = express.Router()

router.post('/', createCustomerController)
router.get('/', listCustomerController)
router.get('/:id', getByIdCustomerController)
router.put('/:id', editCustomerController)
router.delete('/:id', deleteCustomerController)

export default router
