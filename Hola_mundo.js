// Llamamos al modulo http
const http = require('http');
//Establecemos la url o IP de nuestro servidor 
const hostname = '192.168.1.137';
// Establecemos el puerto de escucha 
const port = 3000;
// Creamos una instancia HTTP con un reques y un response
const server = http.createServer((req,res) => {
        // EL servidor respondera un codigo 200
        res.statusCode = 200;
        // El servidor respondera con un texto plano
        res.setHeader('Content-Type', 'text/plain');
        // El servidor respondera el mensaje hola mundo
        res.end('Hola mundo, Ulises Saenz\n');
    });

server.listen(port,hostname,() => {
    console.log('El servidor se esta ejecutando en http://${hostname}:${port}/');
});    