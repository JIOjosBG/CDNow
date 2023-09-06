import speech from '@google-cloud/speech'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()
export async function getTextFromClip () {
  const client = new speech.SpeechClient()
  const filename = path.resolve('./src/media/videos/tv-report-short.mp3')
  console.log(filename)
  const file = fs.readFileSync(filename)
  const audioBytes = file.toString('base64')
  const audio = {
    content: audioBytes
  }
  const config = {
    encoding: 'MP3',
    sampleRateHertz: 44100,
    languageCode: 'bg-BG'
  }

  const request = { audio, config }
  const [response] = await client.recognize(request)
  const transcription = response.results.map(r => r.alternatives[0].transcript).join('\n')
  return transcription
}
