import { v2 } from '@google-cloud/speech'
import dotenv from 'dotenv'
// import fetch from 'node-fetch'
dotenv.config()
const myCallbakc = async (err, op) => {
  await op.promise()
  console.log(err)
  console.log(Object.keys(op))
  console.log(op.result.results['gs://testing1watafak/tv-report.mp3'].transcript.results.map(r => r.alternatives[0].words).flat().map(w => w.word).join(' '))
  console.log(op.result.totalBilledDuration.seconds)
//   console.log(Object.keys(op.result.results))
//   console.log(Object.keys(op.result.results['gs://testing1watafak/tv-report.mp3']))
}
export async function getTextFromClip () {
  const client = new v2.SpeechClient({ apiEndpoint: 'europe-west4-speech.googleapis.com' })
  //   const client = new v2.SpeechClient({ apiEndpoint: 'europe-west4' })
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
    gcsUri: 'gs://testing1watafak/tv-report-v2.json'
  }
  const request = {
    audio,
    config,
    outputConfig
  }
  const project = 'podcast-transcriber-398211'
  //   const location = 'gs://testing1watafak'
  const location = 'europe-west4'
  const recognizer = 'my-first-chirp'
  //   const res = await client.listRecognizers({
  //     // parent: `project/${project}/location/${location}`,
  //     // pageSize: 5,
  //     // showDeleted: true,
  //     // pageToken: null
  //     parent: null, // `project/${project}/location/${location}`,
  //     pageSize: null,
  //     showDeleted: null,
  //     pageToken: null
  //   }, {})
  //   const res = client.longRunningRecognize(request) // v1
  //   const recognizerRequest = client.getRecognizerRequest
  console.log('started')
  //   console.log(await client.getRecognizer({ name: `projects/${project}/locations/${location}/recognizers/${recognizer}` })) // v2
  const r = await client.batchRecognize({
    recognizer: `projects/${project}/locations/${location}/recognizers/${recognizer}`,
    config: {
      features: {
        enableWordTimeOffsets: true,
        enableAutomaticPunctuation: true
      }

    },
    files: [
      { uri: 'gs://testing1watafak/tv-report.mp3' }
    ],
    recognitionOutputConfig: {
      //   gcsOutputConfig: {
      //     uri: 'gs://testing1watafak/res1.json'
      //   }
      inlineResponseConfig: {}
    }
  },
  myCallbakc
  )
  // 'projects/522228495151/locations/europe-west4/operations/v2-65051c5e-0000-24f9-9d43-14223bb9eb5e
  return 'a'
}

getTextFromClip()
