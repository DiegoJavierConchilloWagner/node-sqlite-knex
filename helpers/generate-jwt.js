const jwt = require('jsonwebtoken');


const generateJWT = ( uid = '' ) =>{

    return new Promise((resolve, reject) => {
        // Almacena el uid en el payload
        const payload = { uid };
        // Genera el JWT
        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        },(err,token) => {
            if(err) {
                console.error(err);
                reject('No se pudo generar el token');
            }else{
                resolve( token );
            }
        })
    })

}


module.exports = {
    generateJWT
}