
import app from './config/express';
import http from 'http';

http.createServer(app).listen(3000, () => {
    console.log('Servidor inicado');
});
