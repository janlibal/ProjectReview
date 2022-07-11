import express from 'express';

import { create, getAll, getMine, test } from '../controllers/postController.js';

import requireLogin from '../middleware/reguireLogin.js'

const router = express.Router()

router.post('/create', requireLogin, create)
router.get('/posts', getAll)


router.get('/:id', requireLogin, getMine)
router.get('/test', requireLogin, test)

export default router