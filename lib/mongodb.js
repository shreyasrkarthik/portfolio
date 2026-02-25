import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let clientPromise = null;

if (uri) {
  const client = new MongoClient(uri);
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    clientPromise = client.connect();
  }
}

export default clientPromise;
