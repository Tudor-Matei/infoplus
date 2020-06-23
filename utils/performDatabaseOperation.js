import MongoClient from "mongodb";
import dbConfig from "../configs/db";

async function connectToDatabase() {
    const client = await MongoClient.connect(dbConfig.dbURI);
    return { db: client.db(dbConfig.dbName), closeConnectionHandler: () => client.close() };
}

export default async function performDatabaseOperation(callback) {
    let closeConnection;
    try {
        const { db, closeConnectionHandler } = await connectToDatabase();
        closeConnection = closeConnectionHandler;
        return await callback(db, closeConnection);
    } catch (err) {
        if (closeConnection) closeConnection();
        console.error(err);

        return { data: null, err: "A apărut o eroare internă, vă rugăm să ne scuzați." };
    }
}
