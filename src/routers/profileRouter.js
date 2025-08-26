import express from 'express'
import { createProfileController } from '../controllers/profile/createProfileController.js'
import { listProfileController } from '../controllers/profile/listProfileController.js'
import { getByIdProfileController } from '../controllers/profile/getByIdProfileController.js'
import { editProfileController } from '../controllers/profile/editProfileController.js'
import { deleteProfileController } from '../controllers/profile/deleteProfileController.js'

const router = express.Router()

router.post('/', createProfileController)
router.get('/', listProfileController)
router.get('/:id', getByIdProfileController)
router.put('/:id', editProfileController)
router.delete('/:id', deleteProfileController)

export default router