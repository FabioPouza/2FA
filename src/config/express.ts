import express from 'express';
import consign from 'consign';

let app = express();

consign({cwd: 'src'})
    .include('routes')
    .into(app);

export = app;