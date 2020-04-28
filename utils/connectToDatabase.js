import MongoClient from "mongodb";
import dbConfig from "../configs/db";

export default function connectToDatabase(callback) {
    return MongoClient.connect(dbConfig.dbURI, (error, client) => {
        if (error) {
            console.error(error);
            return client.close();
        }

        callback(client.db(dbConfig.dbName));
        client.close();
    });
}
