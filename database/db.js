

import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const connection = async (URL) => {

    try {

        await mongoose.connect(URL, { UseUnifiedTopology: true, useNewUrlparser: true })
        console.log("Database Connected successfully");
    } catch (error) {
        console.log("Error while connecting the database " + error.message)
    }
}

export default connection;