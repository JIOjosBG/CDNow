import { createBucket, uploadFileToBucket } from '../libs/cloudStorage/index.js'
import express from 'express'

const router = express.Router()
const bucket = 'testing1watafak'

router.get('/create-bucket', async (req, res) => res.send(await createBucket()))
router.get('/upload-file/:podcast', async (req, res) => res.send(await uploadFileToBucket()))

function uploadFileRoute (req, res) {
  const podcast = req.path.podcasr
  const file = req.file
}

export default router
