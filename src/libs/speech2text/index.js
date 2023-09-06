import speech from '@google-cloud/speech'
import dotenv from 'dotenv'

dotenv.config()
export async function getTextFromClip () {
  const client = new speech.SpeechClient()
  const uri = 'gs://testing1watafak/tv-report.mp3'
  const audio = {
    uri
  }
  const config = {
    encoding: 'MP3',
    sampleRateHertz: 44100,
    languageCode: 'bg-BG',
    enableAutomaticPunctuation: true,
    enableWordTimeOffsets: true
  }
  const outputConfig = {
    gcsUri: 'gs://testing1watafak/new-tv-report.json'
  }
  const request = {
    audio,
    config,
    outputConfig
  }
  await client.longRunningRecognize(request)
  return 'a'
}
