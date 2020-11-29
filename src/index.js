const express =require('express');
const path=require('path');
//inicializaciones
const app=express();
const indexRoutes=require('./routers/index');
//settings
app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
//middlewares

app.use(express.urlencoded({extended:false}));
app.use(express.json());
//Global variables
app.use((req, res, next)=>{
    next();
});
//routes
app.use(indexRoutes);
//static files
app.use(express.static(path.join(__dirname,'public')));
//listening server
app.listen(app.get('port'), () => {
    console.log("server on port ", app.get('port'));
});