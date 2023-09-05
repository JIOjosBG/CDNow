import { getTextFromClip } from "../libs/speech2text";
import { express } from "express";

const router = express.Router();

router.get('/get-subtitles',(req,res)=>res.send(getTextFromClip('a')))


export default router