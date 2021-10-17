const path = require('path');

const options = {
    client: 'sqlite3',
    connection: {
        filename: `${path.resolve('database/db', 'midb.db')}`,
    },
    useNullAsDefault: true,
};

console.log('Conectando a la base de datos...');

module.exports = {
    options
};