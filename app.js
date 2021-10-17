require('dotenv').config();
const Server = require('./models/server');


//Ejecucion del servidor
const server = new Server();
server.listen();
