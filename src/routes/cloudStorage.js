import { createBucket, uploadFileToBucket } from '../libs/cloudStorage/index.js'
import express from 'express'

const router = express.Router()

router.get('/create-bucket', async (req, res) => res.send(await createBucket()))
router.get('/upload-file', async (req, res) => res.send(await uploadFileToBucket()))

export default router
