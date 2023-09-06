import Storage from '@google-cloud/storage'

// For more information on ways to initialize Storage, please see
// https://googleapis.dev/nodejs/storage/latest/Storage.html

// Creates a client from a Google service account key
// const storage = new Storage({keyFilename: 'key.json'});

export async function createBucket () {
//   const storage = new Storage()
//   // Creates the new bucket
  const bucketName = 'testing1'
  //   await storage.createBucket(bucketName)
  return `Bucket ${bucketName} created. (not actually)`
}
