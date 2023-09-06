import { Storage } from '@google-cloud/storage'
import path from 'path'
// For more information on ways to initialize Storage, please see
// https://googleapis.dev/nodejs/storage/latest/Storage.html

// Creates a client from a Google service account key
// const storage = new Storage({keyFilename: 'key.json'});
const storage = new Storage()
const bucketName = 'testing1watafak'

export async function createBucket () {
  await storage.createBucket(bucketName)
  return `Bucket ${bucketName} created.`
}

export async function uploadFileToBucket () {
  const filePath = path.resolve('./src/media/videos/tv-report.mp3')

  await storage.bucket(bucketName).upload(filePath, { destination: filePath.split('/').pop() })

  return `${filePath} uploaded to ${bucketName}`
}
