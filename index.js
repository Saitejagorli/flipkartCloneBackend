
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


app.get("/", function (req, res) {
    res.send("hi");
});

const PORT = process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL = process.env.MONGODB_URI || "mongodb+srv://" + USERNAME + ":" + PASSWORD + "@cluster0.mokr9ak.mongodb.net/?retryWrites=true&w=majority";
connection(URL);
app.listen(PORT, () => console.log('sever started at port ' + PORT)
);
DefaultData();