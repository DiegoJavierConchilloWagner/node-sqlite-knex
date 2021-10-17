const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const miDb = require('./sqlite');


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            ejsView: '/view/ejs',
        };   

        //Conectar a base de datos
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Rutas de la App
        this.routes();
    }

    async connectDB() {
        await miDb();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        //Lectura y parseo
        this.app.use( express.json() );

        // Parseo de datos de forms
        this.app.use(express.urlencoded({extended:false}))

        // Directorio public
        this.app.use( express.static('/public') );

        // FileUpload - Carga de archivos
        this.app.use( fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath : true
        }));

        //Establece el visualizador
        this.app.set('view engine', 'ejs');
    }

    routes(){
        this.app.use(this.paths.ejsView, require('../routes/ejs'));
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto: ${this.port}`);
        });
    }
}

module.exports = Server;