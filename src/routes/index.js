import {getTextFromClip} from '../libs/speech2text/index.js'
import express from 'express'

const router = express.Router()

router.use('/get-text-from-clip',(req,res)=>res.send(getTextFromClip('a')))

export default router