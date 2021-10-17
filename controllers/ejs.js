const { request, response } = require('express');
const { options } = require('../database/config');
const knex = require('knex')(options);

// Obtener categorias
const productsGet = async (req = request, res = response) => {
    try {
        let articulos = await knex.from('productos').select('*');
        console.log(articulos);
        res.send(articulos);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const createProduct = async (req, res = response) => {
    try {
        const mate = [{
            name: 'Mate',
            price: 500,
            thumbnail: 'http://www.imagen.com/imagen.jpg',
        }, ];
        const created = await knex('productos').insert(mate);
        res.send(created);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
// Actualizar categoria - nombre
const updateProduct = async (req, res = response) => {
    try {
        const updated = await knex
            .from('productos')
            .where('name', '=', 'Mate')
            .update({
                name: 'Mate Nuevo'
            });
        res.send(updated);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
//borrar categoria - estado:false
const deleteProduct = async (req, res = response) => {
    try {
        const removed = await knex
            .from('productos')
            .where({
                name: 'Mate Nuevo'
            })
            .del();
        res.send(removed);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
module.exports = {
    productsGet,
    createProduct,
    updateProduct,
    deleteProduct,
};