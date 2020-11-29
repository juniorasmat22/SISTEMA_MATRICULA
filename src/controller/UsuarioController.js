const Usuario = require('../model/usuario');
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const { email, contra } = req.body;
    const usuario = new Usuario({
        UserName: email,
        UserPassword: contra,
        UserEstado: 1,
        UserModify_at:''
    });
    Usuario.create(usuario, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
            /* res.send(data) */
            
        else res.redirect('/usuarios');
    });
};
exports.findAll = (req, res) => {
    Usuario.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
            
            /* res.send(data); */
        else res.render('index.html',{users:data});
    });
};
/* exports.index=(req,res)=>{
    res.render('index.html');
} */