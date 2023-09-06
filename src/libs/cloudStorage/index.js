import { Storage } from '@google-cloud/storage'

// For more information on ways to initialize Storage, please see
// https://googleapis.dev/nodejs/storage/latest/Storage.html

// Creates a client from a Google service account key
// const storage = new Storage({keyFilename: 'key.json'});

export async function createBucket () {
  const storage = new Storage()
  const bucketName = 'testing1watafak'
  await storage.createBucket(bucketName)
  return `Bucket ${bucketName} created.`
}
