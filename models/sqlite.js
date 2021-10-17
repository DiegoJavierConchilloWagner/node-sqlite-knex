const { options } = require('../database/config');
const knex = require('knex')(options);

const miDb = async() => {
    try {
        if (!(await knex.schema.hasTable('productos'))) {
            await knex.schema.createTable('productos', (table) => {
                table.increments('id'),
                    table.string('name'),
                    table.float('price'),
                    table.string('thumbnail');
            });
            console.log('Tabla de productos creada...');
            // const testProduct = [{
            //     name: 'Producto Prueba',
            //     price: 17.33,
            //     thumbnail: 'http://www.imagen.com/imagen.jpg',
            // }, ];
            // await knex('productos').insert(testProduct);
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = miDb;