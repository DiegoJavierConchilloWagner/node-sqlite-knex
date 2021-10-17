const { Router } = require('express');
const { createProduct,
        productsGet,
        updateProduct, 
        deleteProduct } = require('../controllers/ejs');

const router = Router();

// {{url}}/view/ejs

//Obtener todos los productos
router.get('/', productsGet);

//Crear producto
router.post('/save', createProduct );

//Actualizar producto
router.post('/update', updateProduct);

//Borrar producto
router.post('/delete', deleteProduct );


module.exports = router;