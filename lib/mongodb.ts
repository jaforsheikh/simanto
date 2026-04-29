import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("❌ MONGODB_URI missing");
}

const options = {};

let client: MongoClient;

declare global {
  var _mongo: MongoClient | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(uri, options);
  }
  client = global._mongo;
} else {
  client = new MongoClient(uri, options);
}

export { client };