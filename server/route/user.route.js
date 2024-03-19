const bookController=require('../controller/Book.controller');
const user=require('../controller/user.controller')
const createBook='/api/book';
module.exports=app=>{
    app.post(createBook,bookController.createBook)
    app.get('/api/book',bookController.getBook)
    app.get('/api/book/:id',bookController.getOnebooK)
    app.patch('/api/book/edit/:id',bookController.UpdateBook)
    app.delete('/api/book/:id',bookController.deleteBook)
}
module.exports=app=>{
    app.post('/api/register',user.register)
    app.post('/api/login',user.login)
    app.post('/api/logout/',user.logout)
    
}