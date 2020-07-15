import MongoClient from "mongodb";
import dbConfig from "../configs/db";

async function connectToDatabase() {
    const client = await MongoClient.connect(dbConfig.dbURI);
    return { db: client.db(dbConfig.dbName), closeConnectionHandler: () => client.close() };
}

export default async function performDatabaseOperation(callback) {
    let closeConnection;
    try {
        console.log("Connection with database established at", getDate());
        const { db, closeConnectionHandler } = await connectToDatabase();
        closeConnection = closeConnectionHandler;

        return callback(db, () => {
            closeConnection();
            console.log("Connection with database closed nominally at", getDate());
        });
    } catch (err) {
        if (closeConnection) closeConnection();
        console.error(err);
        console.log("Connection closed with database with internal error at", getDate());
        return { data: null, err: "A apărut o eroare internă, vă rugăm să ne scuzați." };
    }
}

function getDate() {
    const date = new Date();
    return `${date.toLocaleTimeString()} ms:${date.getMilliseconds()}`;
}
