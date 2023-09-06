import { createBucket } from '../libs/cloudStorage/index.js'
import express from 'express'

const router = express.Router()

router.get('/create-bucket', async (req, res) => res.send(await createBucket()))

export default router
