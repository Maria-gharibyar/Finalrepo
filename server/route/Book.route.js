const bookController=require('../controller/Book.controller');
const getBook='/api/book';
const { authenticate } = require('../config/jwt.config');
module.exports=app=>{
    app.post('/api/book',authenticate,bookController.createBook)
    app.get(getBook,authenticate,bookController.getBook)
    app.get('/api/book/:id',authenticate,bookController.getOnebooK)
    app.patch('/api/book/edit/:id',authenticate,bookController.UpdateBook)
    app.delete('/api/book/:id',authenticate,bookController.deleteBook)
}