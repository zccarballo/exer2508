const db = require("../../creo_bbdd.js");
const paxinas = require ("../../2.Datos/datos.paxinas");
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

    

    db.get("select * from USUARIOS WHERE nome_usuarios = ? and mail_usuarios = ?", [desencriptoUser.user.nome_usuario,desencriptoUser.user.email],(error,row)=>{
        if (error){
            console.error(error.message);
            res.status(500).send("Erro interno do servidor");
        }
        if (!row) {
          res.status(404).json({ message: "Usuario no encontrado" });
          return;
        }
        console.log("row ",row)

        let condicionUsuarioCorrecto = desencriptoUser.user.nome_usuario == row.nome_usuarios &&  desencriptoUser.user.email == row.mail_usuarios;
        if(condicionUsuarioCorrecto){
            if(row.rol_usuarios === "admin"){
                console.log("ENTROU ADMIN")
                res.status(200).send(paxinas.app)
            }else{
                console.log("ENTROU USUARIO")
                res.status(200).send(paxinas.usuario)
            }
            
        
        }else{
            res.status(401).json(datoEnviadoEnErro);
        }
    })  


    
}

module.exports = isUser;