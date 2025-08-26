
const jwt = require ('jsonwebtoken'); //jwt e unha libreria con datos que instalamos previamente
const accesoUser = (req,res) => {
    const {nome, email} = req.body;//desestructura o obxecto de entrada
    console.log(nome, email);

    //ESTA CONDICION FAI QUE A EQUIVALENCIA A ENTRAR NA BASE DE DATOS A SOLICITAR
    //O LOGUEO DE USUARIO
    
    let condicionUsuarioCorrecto = req.body.nome == 'Zoe' && req.body.email == 'yo@gmail.com';
    let datoEnviadoCondicionUsuarioCorrecto = {}
    let datoEnviadoEnErro = {resposta: "faltan campos ou usuario non rexistrado"}

    if (condicionUsuarioCorrecto){
        //ENVIO O USUARIO ENCRIPTADO -- SECRETO
        const tokenUsuario = jwt.sign({usuario: req.body.nome, email: req.body.email}, process.env.SEGREDO)
        console.log("tokenUser", tokenUsuario)
        datoEnviadoCondicionUsuarioCorrecto.resposta = "acceso autorizado";
        datoEnviadoCondicionUsuarioCorrecto.tokenUsuario = tokenUsuario

        res.send(datoEnviadoCondicionUsuarioCorrecto);
    }else{
        res.send(datoEnviadoEnErro);
    }
}

module.exports = accesoUser;