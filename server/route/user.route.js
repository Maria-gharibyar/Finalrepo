const bookController=require('../controller/Book.controller');
const user=require('../controller/user.controller')
const createBook='/api/book';

    
module.exports=app=>{
    app.post('/api/register',user.register)
    app.post('/api/login',user.login)
    app.post('/api/logout',user.logout)
    
}