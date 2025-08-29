//   // REXISTRO DE USUARIO
// const jwt = require ('jsonwebtoken'); //jwt e unha libreria con datos que instalamos previamente
//   const rexistroUser = (req, res) => {
//     const { nome, email } = req.body;
//     console.log(nome, email);

//     let condicionRexistroCorrecto = req.body.nome == 'Jose' && req.body.email == 'jose@gmail.com';
//     let datoEnviadoRexistroCorrecto = {}
//     let datoEnviadoRexistroErro = {resposta: "faltan campos ou usuario non rexistrado"}

//     if (condicionRexistroCorrecto){
//         //ENVIO O USUARIO ENCRIPTADO -- SECRETO
//         const tokenUsuario = jwt.sign({usuario: req.body.nome, email: req.body.email}, process.env.SEGREDO)
//         console.log("tokenUser", tokenUsuario)
//         datoEnviadoRexistroCorrecto.resposta = "acceso autorizado";
//         datoEnviadoRexistroCorrecto.tokenUsuario = tokenUsuario

//         res.send(datoEnviadoRexistroCorrecto);
//     }else{
//         res.send(datoEnviadoRexistroErro);
//     }
// };
// module.exports = rexistroUser;