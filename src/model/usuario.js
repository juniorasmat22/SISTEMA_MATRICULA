const pool= require('../config/database');
const Usuario = function(usuario) {
  this.UserId= usuario.UserId;
  this.UserName = usuario.UserName;
  this.UserPassword = usuario.UserPassword;
  this.UserCreate_at = usuario.UserCreate_at;
  this.UserModify_at = usuario.UserModify_at;
  this.UserEstado = usuario.UserEstado;
};
Usuario.create= async (newUser, result)=>{
 await pool.query("INSERT INTO usuarios set ?",[newUser],(err,res)=>{
     if(err){
         console.log("error: ".err );
         result(err,null);
         return;
     }
     console.log("usuario creado: ");
     result(null,{id: res.insertId});
 });
};
Usuario.getAll=result=>{
    pool.query("Select * from Usuarios",(err,data)=>{
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
          result(null, data);
    });
};
module.exports = Usuario;
