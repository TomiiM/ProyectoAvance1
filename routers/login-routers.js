module.exports= (app,passport) => {
    app.get('/pagina1',(req, res) => {
        res.render('pagina1')
    }); 
    
    app.post('/pagina1',(req, res)=>{});
    
    app.get('registro', (req, res)=>{
        res.render('registro', {
            message: req.flash('registroMensaje')
        })
    });

    app.post('/registro',(req, res)=>{});
};


