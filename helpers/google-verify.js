const {
    OAuth2Client
} = require('google-auth-library');

const client = new OAuth2Client( process.env.GOOGLE_CLIENT_ID );

const googleVerify = async( idToken = '' ) => {
    const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const { name, picture: img, email: mail } = ticket.getPayload();

    return { name, img, mail };
    // const userid = payload['sub'];
    // If request specified a G Suite domain:
    // const domain = payload['hd'];
}

module.exports = {
    googleVerify
}