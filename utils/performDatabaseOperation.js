import MongoClient from "mongodb";
import dbConfig from "../configs/db";

// TODO: retry functionality on setInterval?

let client = null;
export default async function performDatabaseOperation(callback) {
    if (!client) {
        client = await connectToDatabase();
        if (!client)
            return { data: null, err: "A apărut o eroare internă, vă rugăm să ne scuzați." };
    }

    try {
        return callback(client.db(dbConfig.dbName));
    } catch (e) {
        console.error(e);
        return { data: null, err: "A apărut o eroare internă, vă rugăm să ne scuzați." };
    }
}

async function connectToDatabase() {
    try {
        console.log("Conectare la baza de date... ", getDate());
        return MongoClient.connect(dbConfig.dbURI, { connectTimeoutMS: 1000 * 60 * 2 }); // 2 minute
    } catch (e) {
        console.error("A aparut o eroare: ", e);
        console.log("Se incearca reconectarea la baza de date...");
        try {
            return MongoClient.connect(dbConfig.dbURI, { connectTimeoutMS: 1000 * 60 * 2 });
        } catch (e2) {
            console.error("Reconectare nereusita cu eroare: ", e2);
            return null;
        }
    }
}

function getDate() {
    const date = new Date();
    return `${date.toLocaleTimeString()} ms:${date.getMilliseconds()}`;
}
