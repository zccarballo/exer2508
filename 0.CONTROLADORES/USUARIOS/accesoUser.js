const db = require("../../creo_bbdd.js");
const jwt = require ('jsonwebtoken'); //jwt e unha libreria con datos que instalamos previamente
const accesoUser = (req,res) => {
    const {nome, email} = req.body;//desestructura o obxecto de entrada
    console.log(nome, email);
    
   
db.get("select nome_usuarios,mail_usuarios,rol_usuarios from USUARIOS WHERE nome_usuarios = ? and mail_usuarios = ?", [req.body.nome,req.body.email],(error,row)=>{

    if (error){
        console.error(error.message);
        res.status(500).send("Erro interno do servidor");
    }
    /*if (!row) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }*/
    console.log("row ",row)
    // INTRODUCIMOS UNHA CONDICIÓN QUE NOS ASEGURA QUE SELECCIONAMOS O USUARIO CORRECTO
      let datoParaEncriptar = {
          email: row.mail_usuarios,
          nome_usuario:row.nome_usuarios
        };
        console.log("datoParaEncriptar ",datoParaEncriptar,'process.env.SEGREDO ',process.env.SEGREDO)

          let token = jwt.sign({user: datoParaEncriptar},process.env.SEGREDO)
          console.log('O dato que envía é o código encriptado en jwt, que chamamos token', token)
          if(row.rol_usuarios==="admin"){
            res.send({
              resposta: "acceso autorizado",
              tokenUsuario: token              
            });
          }else{
          res.send({
                    resposta: "acceso autorizado a tarefas",
                    tokenUsuario: token,
                  });
          }

          
    
})
  
}

module.exports = accesoUser;