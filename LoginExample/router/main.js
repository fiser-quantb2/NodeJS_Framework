module.exports = function(app)
{
    var message;
    app.get('/',function(req,res){
        sess = req.session;
        if(sess.username){
            res.render('index');
        }else{
            res.redirect('/login');
        }
    });
    app.get('/login',function(req,res){
        res.render('login', {message});
    });
    app.post('/login',function(req,res){
        sess = req.session;
     	account = {
     		username : 'admin',
     		password : '1234'
     	}
     	var username = req.body.username;
     	var password = req.body.password;
     	if(username == account.username && password == account.password){
            sess.username = req.body.username;
     		res.redirect('/');
     	}else{
     		res.render('login', {message : "Username or password is incorrect!"} );
     	}
     });
    app.get('/logout',function(req,res){
        req.session.destroy(function(err){
            if(err){
                console.log(err);
            }
            else
            {
                res.redirect('/');
            }
        });
    });
}