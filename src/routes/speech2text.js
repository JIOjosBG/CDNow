import { getTextFromClip } from '../libs/speech2text/index.js'
import express from 'express'

const router = express.Router()

router.get('/transcribe', async (req, res) => res.send(await getTextFromClip()))

export default router
