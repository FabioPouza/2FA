import express from 'express';
// @ts-ignore
import consign from 'consign';
import bodyParser from "body-parser";

let app = express();

app.use(bodyParser.json());

consign()
    .include('src/routes')
    .into(app);

export = app;