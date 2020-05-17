import MongoClient from "mongodb";
import dbConfig from "../configs/db";

export default async function connectToDatabase() {
    const client = await MongoClient.connect(dbConfig.dbURI);
    return { db: client.db(dbConfig.dbName), closeConnectionHandler: () => client.close() };
}
