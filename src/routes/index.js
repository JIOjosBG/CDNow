import speechRouter from './speech2text.js'
import cloudStrorageRouter from './cloudStorage.js'
import express from 'express'

const router = express.Router()

router.use('/speech', speechRouter)
router.use('/storage', cloudStrorageRouter)

export default router
