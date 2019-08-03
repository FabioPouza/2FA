
import 'module-alias/register';
// @ts-ignore
import app from './config/express';
// @ts-ignore
import http from 'http';

http.createServer(app).listen(3000, () => {
    console.log('Servidor inicado');
});
