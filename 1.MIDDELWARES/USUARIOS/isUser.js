const jwt = require ('jsonwebtoken'); //jwt e unha libreria con datos que instalamos previamente
const isUser = (req,res,next) => {
    const {authorization} = req.headers;
    if(!authorization){
        throw new Error("Falta cabeceira de autorizacion", 401);
    }

    //ESTA CONDICION FAI A EQUIVALENCIA A ENTRAR NA BASE DE DATOS A SOLICITAR
    //O LOGUEO DO USUARIO

    let datoEnviadoEnErro = {resposta: "Usuario o contraseña incorrectos"}
    const desencriptoUser = jwt.verify(authorization, process.env.SEGREDO);
    console.log("desencriptoUser", desencriptoUser)

    const {usuario, email} = desencriptoUser;
    let condicionUsuarioCorrecto = usuario == 'Zoe' && email == 'yo@gmail.com';
    if(condicionUsuarioCorrecto){
        next()
    
    }else if(usuario === null || email === null || email === undefined || usuario === undefined){
        //throw new HttpError("Usuario o contraseña incorrectos", 403);
        res.send(datoEnviadoEnErro);
    }
}
module.exports = isUser;