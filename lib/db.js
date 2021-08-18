import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:passwordpassword@cluster0.xywok.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
